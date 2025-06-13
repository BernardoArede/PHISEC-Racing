<?php
// File: public_html/api/team.php

// Define header JSON
header('Content-Type: application/json; charset=utf-8');

// Database credentials
$host = 'localhost';
$db   = 'phisec_db';     
$user = 'phisec_admin';     
$pass = 'PHISEC_Racing2024';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro de conexão: ' . $e->getMessage()]);
    exit;
}

// 1) Buscar todos os departamentos
$stmtDept = $pdo->query("SELECT id, name FROM departments ORDER BY name ASC");
$departments = $stmtDept->fetchAll();

$response = ['departments' => []];

foreach ($departments as $dept) {
    $stmtMem = $pdo->prepare(
        "SELECT name, photo, role, linkedin
         FROM members
         WHERE department_id = ?
         ORDER BY name ASC"
    );
    $stmtMem->execute([$dept['id']]);
    $members = $stmtMem->fetchAll();

    // 3) Ajustar caminho da foto para URL pública
    foreach ($members as &$member) {
        $member['photo'] = '/images/team/' . $member['photo'];
    }
    unset($member);

    $response['departments'][] = [
        'name'    => $dept['name'],  
        'members' => $members
    ];
}

// 4) Enviar JSON
echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
exit;
?>
