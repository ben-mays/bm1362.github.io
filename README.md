## Summary
Experience building web applications and distributed systems with pretty much everything. Former AWS developer where I built and maintained large web services using Java, Clojure, Python, blood and sweat. Early technical member of a high growth startup where I learned some lessons on building teams and products. 

## Experience

#### UBER, SAN FRANCISCO, CA

##### Senior Software Engineer, Nov 2017 - Present

I recently joined Uber as the first backend engineer on the mobile platform. Our goal is to build world-class tooling, frameworks and services in support of hundreds of iOS and Android developers making many changes everyday.

Currently building out automated performance testing and regression detection for all of our mobile applications on both iOS and Android. 

#### QUARTET HEALTH, NEW YORK CITY, NY

##### Core APIs, July 2017 – Oct 2017

I was recruited back to Quartet for a 3-month long project to build a new team and migrate our core services to a CQRS architecture. We built a new domain-driven API with Java and Spring. We also used the opportunity to migrate databases, building a real-time replicator from our existing Datomic database to Postgres.

My personal responsibilities were:

* In charge of the initial proposal and system design for the new domain API, as well as the roadmap and deliverables.
* Designed and implemented a framework for translating facts from Datomic transactions produced by our in-house graph mutation API into mutations on the new domain models.
* Met with stakeholders from other teams to help design Quartet's domain models.
* Kept the legacy system's lights on while designing and implementing our new APIs.

#### SOUNDCLOUD, NEW YORK CITY, NY

##### Backend Engineer, Apr 2017 - July 2017

I joined to help shore up the Payments infrastructure team. We were responsible for all state and systems related to subscriptions, tracks behind the paywall and integrations with our payment processors around the world. Our systems were a mix of Scala and Clojure, which regularly see a load of 10k-20k RPS.

#### QUARTET HEALTH, NEW YORK CITY, NY

##### Platform Engineer, Dec 2015 – Apr 2017

I was the sole engineer of most of the backend web services for most of 2016. I helped flesh out metrics aggregation (New Relic at first, Grafana and InfluxDb; finally an ELK stack), alarming/oncall rotations, nightly stakeholder report generation, automated deployments, general engineering house keeping (postmortems, hiring, deployment schedules, etc) and many other mission critical pieces as we scaled our team post-series B.

I built a few key pieces of our initial technology and led an initiative or two; my contributions were:

* SmartMatch, which was a recommendation engine for finding the best behavioral health care specific to you.
* Migrated off of an existing monolithic REST API to a query-driven (think GraphQL) API written in Clojure (and using Datomic) that unblocked our application developers and allowed them to move faster. In retrospect, we probably should've just used GraphQL on top of our existing Django models but moving to the JVM allowed us to unify our system with our Scala/Spark data ingestion pipeline.
* Built an automated state machine system for long-lived business workflows. This alone has saved 1000s of case worker hours and drives Quartet's patient intake process.
* My team eventually grew to 6 and became the _Core Platform_. We were responsible for architecting our central application data store, asynchronous background processes, orchestrating distributed state, and pretty much everything on the backend.
* Did a tour of duty as the technical lead on a cross functional team, marshaling a overhaul of our insurance modeling and intake process so we could improve our matching algorithm. We were seeing high rates of patient rejection due to insurance and decided to invest in accurately model the very complex behavioral health insurance market place.

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
