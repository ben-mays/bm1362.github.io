# Benjamin Mays 
##### ben@eastside.io - 512.216.4277

Experience building web applications and distributed systems with pretty much everything. Former AWS developer where I built and maintained large web services using Java, Clojure, Python, blood and sweat. Early technical member of a high growth startup where I learned some lessons on building teams and products. 

## Experience

#### QUARTET HEALTH, NEW YORK CITY, NY

##### Platform Engineer, Dec 2015 – Present

I was the sole engineer of most of the backend web services for most of 2016. I helped flesh out metrics aggregation (New Relic at first, Grafana and InfluxDb; finally an ELK stack), alarming/oncall rotations, nightly stakeholder report generation, automated deployments, general engineering house keeping (post mortems, hiring, deployment schedules, etc) and many other mission critical pieces as we scaled our team post-series B.

I built a few key pieces of our inital technology and led an initiative or two; my contributions were:

* SmartMatch, which was a recommendation engine for finding the best behavioral health care specific to you.
* Migrated off of an existing monolithic REST API to a query-driven (think GraphQL) API written in Clojure (and using Datomic) that unblocked our application developers and allowed them to move faster. In retrospect, we probably should've just used GraphQL on top of our existing Django models but moving to the JVM allowed us to unify our system with our Scala/Spark data ingestion pipeline.
* Built an automated state machine system for long-lived business workflows. This alone has saved 1000s of case worker hours and drives Quartet's patient intake process.
* My team eventually grew to 6 and became the _Core Platform_. We were responsible for architecting our central application data store, asynchronous background processes, orchestrating distributed state, and pretty much everything on the backend.
* Did a tour of duty as the technical lead on a cross functional team, marshalling a overhaul of our insurance modeling and intake process so we could improve our matching algorithm. We were seeing high rates of patient rejection due to insurance and decided to invest in accurately model the very complex behavioral health insurance market place.

Currently migrating our core services to a CQRS architecture. We're building a new domain-driven API powered by a real-time replicator from our existing Datomic database to Postgres.


#### FREELANCE

##### Software Engineer, Jul 2015 – Jan 2016

Spent some time traveling and freelancing for startups doing systems architecture and backend engineering. Worked on a few projects:

* a platform for educators to create interactive content for class rooms. (Java/Angular) 
* a RoR backend for generating complex labor forecasts, based on a massive ETL from DoL and other data sources.


#### AMAZON WEB SERVICES, SEATTLE, WA

##### Software Development Engineer, May 2013 – Jul 2015

I worked in Amazon Web Services on the Elastic Block Store (EBS) service building distributed systems and web services at scale. Helped architect complex solutions to distributed systems, built and maintained critical control plane services to orchestrate state in AWS backend services. 

Beyond the day to day, I had worked on a few other initatives:

* Inherited the volume metering system, a critical system responsible for collating volume usage from disparate systems and producing a per-customer record for upstream billing teams. The system had to run for each hour and was required to submit billing data daily. At the time, the system had both scaling and correctness issues that cost me my youth and resulted in a complete redesign.
* Proactively built a system to continually test the volume control plane from upstream consumers, in all AWS regions. The project had some growing pains, but ultimately led us to identify regressions and bugs that were externally facing.
* Ran a daily meeting where the EBS Control Plane gathered to review and discuss all of our metrics and dashboards.
* Part of a new team that was created to design and launch a key-value storage server-service, built on top of a replicated log and Paxos. Built and launched the control plane for the service, solely responsible for the state management service, a data migration service and a garbage collection service that re-drove state changes in the fleet. Contributed to the design and implementation of many parts of the service, at all levels.

## Education

#### TEXAS STATE UNIVERSITY, SAN MARCOS, TX
##### BS in Computer Science, Cum Laude, May 2013
