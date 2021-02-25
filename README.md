# Reviews Service 

I recieved this legacy codebase that contained the front end for a reviews service and I was tasked with redesigning and scaling the back end for this service and deploying it using AWS platform service.

I used Postgres as the database and seeded it with 71 million records to mimic that amount of data that a review service would need to handle.  This benchmark was taken with the database still running on localhost.  Afterwards, I delpoyed the database to its own AWS EC2 instance.

![alt text](https://repo-screenshots.s3.amazonaws.com/pg+bench+Postgres+SDC.png)

I set up an AWS Load Balancer with four service EC2 instances in the target group.  All of the services shared the one Postgres EC2 instance.

![alt text](https://repo-screenshots.s3.amazonaws.com/SDC+Reviews+Service.png)

This is a K6 benchmark and the New Relic becnhmark for my service endpoint.
![alt text](https://repo-screenshots.s3.amazonaws.com/K6+SDC+Benchmark.png)

![alt text](https://repo-screenshots.s3.amazonaws.com/SDC+New+relic.png)
