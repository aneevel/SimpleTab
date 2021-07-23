<?php
    require 'database.php';

    $tabs = [];
    $sql = "SELECT id, title, artist, transcriber, notes, staves, bpm FROM tabs";

    if ($result = mysqli_query($connection, $sql)) {
        $index = 0;
        while ($row = mysqli_fetch_assoc($result))
        {
            $tabs[$index]['id'] = $row['id'];
            $tabs[$index]['title'] = $row['title'];
            $tabs[$index]['artist'] = $row['artist'];
            $tabs[$index]['transcriber'] = $row['transcriber'];
            $tabs[$index]['notes'] = $row['notes'];
            $tabs[$index]['staves'] = $row['staves'];
            $tabs[$bpm]['bpm'] = $row['bpm'];

            $index++;

        }

        echo json_encode($tabs);
    }
    else {
        http_response_code(404);
    }
?>