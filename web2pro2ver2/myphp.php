<?php
  if(isset($_POST['event']))
  {
    $events = json_decode($_POST['event'],true);
    $conn = new mysqli("localhost", "root", "", "events");
      if($conn->connect_error){
        die($conn->connect_error);
      }
      else
      {
        echo "Connected Successfully";
      }
    $sql0 ="use events;
    drop table event;";
    $sql1 = "use events;
    create table if not exists event(
      event_type varchar(40),
        target varchar(40),
        event_date date
    );";
    $conn->query($sql0);
    $conn->query($sql1);
    for($i=0;$i<count($events);$i++)
    {
      $type = $events[$i]['type'];
      $target = $events[$i]['target'];
      $dat = $events[$i]['date'];
      $sql = "Insert Into event values('$type','$target','$dat')";
      $conn->query($sql);
    }
      if($conn->affected_rows > 0){
        echo "Inserted Successfully";
      }
      else{
        echo "Sorry: Problem With Insertion";	
      }
    }


?>













