<?php
    require 'database.php';

    $postdata = file_get_contents("php://input");

    if (isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);

        // We only want valid data 
        if (trim($request->number) === '')
        {
            return http_response_code(400);
        }

        // We also want to sanitize data - no bobby tables here
        $title = mysqli_real_escape_string($connection, $trim($request->title));
        $artist = mysqli_real_escape_string($connect, $trim($request->artist));
        $
    }