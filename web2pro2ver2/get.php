<?php
    //////////////get the Data from Mysql
    if(isset($_GET['event']))
    $conn = new mysqli("localhost", "root", "", "events");
    if($conn->connect_error){
      die($conn->connect_error);
    }
    else
    {
      echo "Connected Successfully";
    }
    $sql = "Select * from event";
    if($res = $conn->query($sql))
    {
        $Rows = array();
        if($res->num_rows > 0)
        {
            while($row = $res->fetch_assoc())
                array_push($Rows,$row);
        }
        echo json_encode($Rows);
    }
    else
    {
        echo "No Data to Retrieve";
    }
?>