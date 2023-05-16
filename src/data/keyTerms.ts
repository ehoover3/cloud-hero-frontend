export const terms = [
  // Analytics
  {
    name: "Amazon Athena",
    type: "Analytics",
    definition: "Query data in S3 using SQL",
    youtube: ["https://www.youtube.com/watch?v=kgwJ9zeWIy0"],
    notes: [],
  },
  {
    name: "Amazon Kinesis",
    type: "Analytics",
    definition: "Easily stream data at any scale",
    youtube: ["https://www.youtube.com/watch?v=MbEfiX4sMXc"],
    notes: [],
  },
  {
    name: "Amazon OpenSearch Service",
    type: "Analytics",
    definition:
      "Search, visualize, and analyze up to petabytes of text and unstructured data",
    youtube: [
      "https://www.youtube.com/watch?v=cZHB7KBubWs&list=PLC1EA73D8914686E5&index=109",
    ],
    notes: [],
  },
  // Application Integration
  {
    name: "AWS AppSync",
    type: "Application Integration",
    definition:
      "Build data-driven apps with real-time and offline capabilities",
    youtube: [],
    notes: [],
  },
  {
    name: "Amazon EventBridge (Amazon CloudWatch Events)",
    type: "Application Integration",
    definition: "Serverless event bus for SaaS apps & AWS services",
    youtube: ["https://www.youtube.com/watch?v=TXh5oU_yo9M"],
    notes: [],
  },
  {
    name: "Amazon Simple Notification Service (Amazon SNS)",
    type: "Application Integration",
    definition: "Fully managed Pub/Sub service for A2A and A2P messaging",
    youtube: [],
    notes: [],
  },
  {
    name: "Amazon Simple Queue Service (Amazon SQS)",
    type: "Application Integration",
    definition:
      "Fully managed message queuing for microservices, distributed systems, and serverless applications",
    youtube: ["https://www.youtube.com/watch?v=XrX7rb6M3jw"],
    notes: [
      "DeleteQueue:  deletes the queue specified by the QueueUrl, regardless of the queue's contents",
    ],
  },
  {
    name: "AWS Step Functions",
    type: "Application Integration",
    definition: "Visual workflows for distributed applications",
    youtube: [
      "https://www.youtube.com/watch?v=Dh7h3lkpeP4",
      "https://www.youtube.com/watch?v=wFAjRUyuzik",
    ],
    notes: [],
  },
  //  Compute
  {
    name: "Amazon EC2",
    type: "Compute",
    definition: "Virtual servers in the cloud",
    youtube: ["https://www.youtube.com/watch?v=TsRBftzZsQo"],
    notes: [],
  },
  {
    name: "AWS Elastic Beanstalk",
    type: "Compute",
    definition: "Run and manage web apps",
    youtube: ["https://www.youtube.com/watch?v=SrwxAScdyT0"],
    notes: [
      "Rolling Deployment Policy: application is deployed to your environment one batch of instance at a time.  Suitable for high traffic and high availability requirements",
      "Rolling Deployment with Additional Batch Policy: launches extra batches instances, then performs a rolling deployment.  Avoids any reduced availability, although at a cost and longer deployment compared to rolling method",
      "Immutable Deployment Policy: a slower method that ensures your new application version is always deployed to new instances instead of updating existing instnaces",
      "All at Once Deployment Policy: the quickest method",
    ],
  },
  {
    name: "AWS Lambda",
    type: "Compute",
    definition: "Run code without thinking about servers",
    youtube: ["https://www.youtube.com/watch?v=eOBq__h4OJ4"],
    notes: [],
  },
  {
    name: "AWS Serverless Application Model (AWS SAM)",
    type: "Compute",
    definition: "",
    youtube: ["https://www.youtube.com/watch?v=1dzihtC5LJ0"],
    notes: [],
  },
  // Containers
  {
    name: "AWS Copilot",
    type: "Containers",
    definition: "",
    youtube: [],
    notes: [],
  },
  {
    name: "Amazon Elastic Container Registry (Amazon ECR)",
    type: "Containers",
    definition: "Command line interface for containerized applications",
    youtube: [],
    notes: [],
  },
  {
    name: "Amazon Elastic Container Service (Amazon ECS)",
    type: "Containers",
    definition: "Run and manage docker containers",
    youtube: [
      "https://www.youtube.com/watch?v=FnFvpIsBrog&list=PLC1EA73D8914686E5&index=131",
    ],
    notes: [],
  },
  {
    name: "Amazon Elastic Kubernetes Services (Amazon EKS)",
    type: "Containers",
    definition: "Run managed Kubernetes on AWS",
    youtube: [],
    notes: [],
  },
  // Database
  {
    name: "Amazon Aurora",
    type: "Database",
    definition: "High performance managed relational database",
    youtube: [
      "https://www.youtube.com/watch?v=FzxqIdIZ9wc",
      "https://www.youtube.com/watch?v=xKFA6PJgp0o",
      "",
    ],
    notes: [],
  },
  {
    name: "Amazon DynamoDB",
    type: "Database",
    definition: "Managed NoSQL database",
    youtube: ["https://www.youtube.com/watch?v=sI-zciHAh-4"],
    notes: [],
  },
  {
    name: "Amazon ElastiCache",
    type: "Database",
    definition: "In-memory caching service",
    youtube: [],
    notes: [],
  },
  {
    name: "Amazon MemoryDB for Redis",
    type: "Database",
    definition:
      "Redis-compatible, durable, in-memory database that delivers ultra-fast performance",
    youtube: [
      "https://www.youtube.com/watch?v=uClbpz5LWPg&list=PLC1EA73D8914686E5&index=140",
    ],
    notes: [],
  },
  {
    name: "Amazon RDS",
    type: "Database",
    definition:
      "Managed relational database service for MySQL, Oracle, SQL and more",
    youtube: [
      "https://www.youtube.com/watch?v=_MROZtLtCcA",
      "https://www.youtube.com/watch?v=GvUaA9cygUk&list=PLC1EA73D8914686E5&index=74",
    ],
    notes: [],
  },
  // Developer Tools
  {
    name: "AWS Amplify",
    type: "Developer Tools",
    definition:
      "Build full-stack web and mobile apps in hours.  Easy to start, easy to scale",
    youtube: [
      "https://www.youtube.com/watch?v=uRbGMZ9oPjw",
      "https://www.youtube.com/watch?v=KJSD6LFErgE",
      "https://www.youtube.com/watch?v=VzhZ5e1kq50",
      "https://www.youtube.com/watch?v=N9auHQZkYS0",
    ],
    notes: [],
  },
  {
    name: "AWS Cloud9",
    type: "Developer Tools",
    definition: "Write, run, and debug code on a cloud IDE",
    youtube: ["https://www.youtube.com/watch?v=JDHZOGMMkj8"],
    notes: [],
  },
  {
    name: "AWS CloudShell",
    type: "Developer Tools",
    definition:
      "Explore and manage AWS resources from a terminal in your browser",
    youtube: ["https://www.youtube.com/watch?v=fz4rbjRaiQM"],
    notes: [],
  },
  {
    name: "AWS CodeArtifact",
    type: "Developer Tools",
    definition:
      "Secure, scalable, and cost-effective package management for software development",
    youtube: [],
    notes: [],
  },
  {
    name: "AWS CodeBuild",
    type: "Developer Tools",
    definition: "Build and test code",
    youtube: ["https://www.youtube.com/watch?v=iEhKcDaNYrs"],
    notes: [],
  },
  {
    name: "AWS CodeCommit",
    type: "Developer Tools",
    definition: "Store code in private Git repositories",
    youtube: ["https://www.youtube.com/watch?v=46PRLMW8otg"],
    notes: [],
  },
  {
    name: "AWS CodeDeploy",
    type: "Developer Tools",
    definition: "Automate code deployments",
    youtube: ["https://www.youtube.com/watch?v=Wx-ain8UryM"],
    notes: [],
  },
  {
    name: "AWS CodeGuru",
    type: "Developer Tools",
    definition: "Find your most expensive lines of code",
    youtube: [
      "https://www.youtube.com/watch?v=oUeSW1STqKY&list=PLC1EA73D8914686E5&index=188",
    ],
    notes: [],
  },
  {
    name: "AWS CodePipeline",
    type: "Developer Tools",
    definition: "Release software using continuous delivery",
    youtube: ["https://www.youtube.com/watch?v=YxcIj_SLfl"],
    notes: [],
  },
  {
    name: "AWS CodeStar",
    type: "Developer Tools",
    definition: "Develop and deploy AWS applications",
    youtube: [],
    notes: [],
  },
  {
    name: "AWS X-Ray",
    type: "Developer Tools",
    definition: "Analyze and debug your applications",
    youtube: [
      "https://www.youtube.com/watch?v=Td7ZSS8p6DA",
      "https://www.youtube.com/watch?v=5lIdNrrO_o8",
      "https://www.youtube.com/watch?v=tl8OWHl6jxw",
    ],
    notes: [],
  },
  // Management and Governance
  {
    name: "AWS AppConfig",
    type: "Management and Governance",
    definition: "Track resources inventory and changes",
    youtube: ["https://www.youtube.com/watch?v=rL_e6W6SlMM"],
    notes: [],
  },
  {
    name: "AWS Cloud Development Kit (AWS CDK)",
    type: "Management and Governance",
    definition:
      "Define your cloud application resources using familiar programming languages",
    youtube: ["https://www.youtube.com/watch?v=HHBRBHs0XFA"],
    notes: [],
  },
  {
    name: "AWS CloudFormation",
    type: "Management and Governance",
    definition: "Create and manage resources with templates",
    youtube: ["https://www.youtube.com/watch?v=Omppm_YUG2g"],
    notes: [],
  },
  {
    name: "AWS CloudTrail",
    type: "Management and Governance",
    definition: "Track user activity and API usage",
    youtube: ["https://www.youtube.com/watch?v=mXQSnbc9jMs"],
    notes: [],
  },
  {
    name: "Amazon CloudWatch",
    type: "Management and Governance",
    definition: "Monitor resources and applications",
    youtube: ["https://www.youtube.com/watch?v=a4dhoTQCyRA"],
    notes: [],
  },
  {
    name: "Amazon CloudWatch Logs",
    type: "Management and Governance",
    definition: "",
    youtube: [],
    notes: [],
  },
  {
    name: "AWS Command Line Interface (AWS CLI)",
    type: "Management and Governance",
    definition: "Unified tool to manage AWS services",
    youtube: [],
    notes: [],
  },
  {
    name: "AWS Systems Manager",
    type: "Management and Governance",
    definition: "Gain operational insights and take action",
    youtube: ["https://www.youtube.com/watch?v=MK4ZoCs-muo"],
    notes: [],
  },
  // Networking and Content Delivery
  {
    name: "Amazon API Gateway",
    type: "Networking and Content Delivery",
    definition: "Build, deploy, and manage API's",
    youtube: [],
    notes: [
      "API Gateway Usage Plans: specifies who can access one or more deployed API stages and methods and how much and how fast they can access them.  The plan uses API keys to identify API clients and meters access to the associated API stages for each key.",
    ],
  },
  {
    name: "Amazon CloudFront",
    type: "Networking and Content Delivery",
    definition: "Global content delivery network",
    youtube: ["https://www.youtube.com/watch?v=AT-nHW3_SVI"],
    notes: [],
  },
  {
    name: "Elastic Load Balancing",
    type: "Networking and Content Delivery",
    definition: "Achieve fault tolerance for any application",
    youtube: [],
    notes: [
      "ALB access logs:  Elastic Load Balancing provices access logs that capture detailed info about requests sent to your load balancer.  Think 'Application Load Balancer access logs'",
    ],
  },
  {
    name: "Amazon Route 53",
    type: "Networking and Content Delivery",
    definition: "Scalable domain name system (DNS)",
    youtube: ["https://www.youtube.com/watch?v=RGWgfhZByAI"],
    notes: [
      "CNAME Record: maps DNS queries for the name of the current record to another domain or subdomain.  For example, a user that goes to original.com will be directed to new.com.",
      "Alias Record: lets you route traffic to selected resources such as S3 buckets or CloudFront distributions",
    ],
  },
  {
    name: "Amazon VPC",
    type: "Networking and Content Delivery",
    definition:
      "Define and launch AWS resources in a logically isolated virtual network",
    youtube: [],
    notes: [],
  },
  // Security, Identity, and Compliance
  {
    name: "AWS Certificate Manager (ACM)",
    type: "Security, Identity, and Compliance",
    definition: "Provision, manage, and deploy SSL/TLS certificates",
    youtube: ["https://www.youtube.com/watch?v=Nk77te-cksQ"],
    notes: [],
  },
  {
    name: "AWS Certificate Manager Private Certificate Authority",
    type: "Security, Identity, and Compliance",
    definition: "",
    youtube: ["https://www.youtube.com/watch?v=9-Mj7NNEzlY"],
    notes: [],
  },
  {
    name: "Amazon Cognito",
    type: "Security, Identity, and Compliance",
    definition: "Identity management for your apps",
    youtube: ["https://www.youtube.com/watch?v=vqAirwfYgrY"],
    notes: [
      "Cognito Sync: Enable cross-device syncing, i.e. user profile data across multiple devices",
      "Cognito Identity Pools: Grant users access to other AWS services, i.e. S3, DynamoDB",
      "Cognito User Pools: A user direcotry in Cognito, user can sign into web/mobile app",
    ],
  },
  {
    name: "AWS Identity and Access Management (IAM)",
    type: "Security, Identity, and Compliance",
    definition:
      "Securely manage identities and access to AWS services and resources",
    youtube: ["https://www.youtube.com/watch?v=SXSqhTn2DuE"],
    notes: [
      "IAM Access Analyzer: helps you identify resources, like S3 buckets or IAM roles, in your organization and accounts that are shared with an external entity.  This lets you identify unintended access to your resources, which is a security risk",
    ],
  },
  {
    name: "AWS Key Management Service (AWS KMS)",
    type: "Security, Identity, and Compliance",
    definition: "Managed creation and control of encryption keys",
    youtube: ["https://www.youtube.com/watch?v=8Z0wsE2HoSo"],
    notes: [],
  },
  {
    name: "AWS Secrets Manager",
    type: "Security, Identity, and Compliance",
    definition: "Rotate, manage, and retrieve secrets",
    youtube: ["https://www.youtube.com/watch?v=-9nOyaM3kZk"],
    notes: [],
  },
  {
    name: "AWS Security Token Service (AWS STS)",
    type: "Security, Identity, and Compliance",
    definition: "",
    youtube: [],
    notes: [],
  },
  {
    name: "AWS WAF",
    type: "Security, Identity, and Compliance",
    definition: "Filter malicious web traffic",
    youtube: [
      "https://www.youtube.com/watch?v=nUI7G9UzyN8&list=PLC1EA73D8914686E5&index=96",
    ],
    notes: [],
  },
  // Storage
  {
    name: "Amazon Elastic Block Store (Amazon EBS)",
    type: "Storage",
    definition: "EC2 block storage volumes",
    youtube: ["https://www.youtube.com/watch?v=77qLAl-lRpo"],
    notes: [],
  },
  {
    name: "Amazon Elastic File System (Amazon EFS)",
    type: "Storage",
    definition: "Fully managed file system for EC2",
    youtube: ["https://www.youtube.com/watch?v=6ZIPBC78U0s"],
    notes: [],
  },
  {
    name: "Amazon S3",
    type: "Storage",
    definition:
      "Object storage built to retrieve any amount of data from anywhere",
    youtube: ["https://www.youtube.com/watch?v=77lMCiiMilo"],
    notes: [],
  },
  {
    name: "Amazon S3 Glacier",
    type: "Storage",
    definition:
      "Long-term, secure, durable classes for data archiving at the lowest cost and milliseconds access",
    youtube: ["https://www.youtube.com/watch?v=gMzVi7Z8zBo"],
    notes: [],
  },
];
