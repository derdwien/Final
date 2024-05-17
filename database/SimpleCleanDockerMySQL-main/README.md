# SimpleCleanDockerMySQL
This is simply a docker compose file that will build an instance of MySQL and PHPMyAdmin on your computer that you can use over and over again to practice commands.  It does not store any of the data so each start is a fresh database. 

## Step 1 
Clone this repository on your computer and then cd into the directory and run the docker compose up command. 

```
docker compose up --build
```

## Step 2 
go to the web address localhost:8080 and verify that the phpMyAdmin runs. 

## Overview 
You now have a version of phpMyAdmin on your computer that can be forgetful.  If you stop and start the container it will remember the data. If you delete the container and run the docker compose command again, it will do a fresh install. 
