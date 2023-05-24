import dynamodb from "../assets/images/icons/service/dynamodb.png";
import rdsMySql from "../assets/images/icons/service/rds-on-vmware.png"
import Elasticache from "../assets/images/icons/service/elasticache.png";

export const questions = [
  {
    id: 1,
    question: `Game company needs to store info on all released games. 
Games have names, version numbers, and categories (i.e. sports, puzzle, etc.).
Games have additional properties, but this additional info is inconsistent across games.
Build a solution that:
 For a given name and version number, get all game details for that name and version number.
 For a given name, get all game details for that name.
 For a given category, get all details about all games in that category.
 What do you recommend as the most efficient solution?`,
    correctAnswer:
      "DynamoDB table with a primary key, name as the partition key, and version number as the sort key. Create a global secondary index with the category as the partition key and the name as the sort key",
    answerOptions: [
      {
        img: dynamodb,
        text: "DynamoDB table with a primary key with the category as the partition key and the version number as the sort key. Create a global secondary index with the name as the partition key",
      },
      {
        img: rdsMySql,
        text: "RDS MySQL instance with a games table that contains columns for name, version number, and category. Configure the name column as the primary key",
      },
      {
        img: Elasticache,
        text: "Permanently store the name, version number, and category info about the games in an Elasticache for Memcached instance",
      },
      {
        img: dynamodb,
        text: "DynamoDB table with a primary key with the name as the partition key and the version number as the sort key. Create a global secondary index with the category as the partition key and the name as the sort key",
      },
    ],
    correctAnswerExplanation:
      "When you create a DynamoDB table, in addition to the table name, you must specify the primary key of the table. The primary key uniquely identifies each item in the table, so that no two items can have the same key. You can create one or more secondary indexes on a table. A secondary index lets you query the data in the table using an alternate key, in addition to queries against the primary key. DynamoDB doesn't require that you use indexes, but they give your applications more flexibility when querying your data.You should note that a global secondary index (GSI) contains a selection of attributes from the base table, but they are organized by a primary key that is different from that of the table. The Global secondary indexes allow you to perform queries on attributes that are not part of the table's primary key.",
    incorrectAnswersExplaination:
      "Use a DynamoDB table with a primary key with the category as the partition key and the version number as the sort key. Create a global secondary index with the name as the partition key - The DynamoDB table for this option has the primary key and GSI that do not solve for the condition - For a given name and version number, get all details about the game with that name and version number. This option does not allow for efficient querying of a specific game by its name and version number as you need multiple queries which would be less efficient than the single query allowed by the correct option.Use anRDS MySQL instance having a games table that contains columns for name, version number, and category. Configure the name column as the primary key - This option is not the right fit as it does not allow you to efficiently query on the version number and category columns.Permanently store the name, version number, and category info about the games in anElasticache for Memcached instance - You cannot use Elasticache for Memcached to permanently store values meant to be persisted in a database (relational or NoSQL). Elasticache is a caching layer. So this option is incorrect.",
  },
  {
    id: 2,
    question:
      "You configured the AWS CLI on your workstation. Your default region is us-east-1 and your IAM user has permissions to operate commands on services such as EC2, S3 and RDS in any region. You would like to execute a command to stop an EC2 instance in the us-east-2 region.What of the following is the MOST optimal solution to address this use-case?",
    correctAnswer: "Use the --region parameter",
    answerOptions: [
      "You need to override the default region by using aws configure",
      "You should create a new IAM user just for that other region",
      "Use the --region parameter",
      "Use boto3 dependency injection",
    ],
    correctAnswerExplanation:
      "If the region parameter is not set, then the CLI command is executed against the default AWS region.",
    incorrectAnswersExplaination:
      "You need to override the default region by using aws configure - This is not the most optimal way as you will have to change it again to reset the default region.You should create a new IAM user just for that other region - This is not the most optimal way as you would need to manage two IAM user profiles. Use boto3 dependency injection - With the CLI you do not use boto3. This option is a distractor.",
  },
  {
    id: 3,
    question:
      "You are a developer for a web application written in .NET which uses the AWS SDK. You need to implement an authentication mechanism that returns a JWT (JSON Web Token).Which AWS service will help you with token handling and management?",
    correctAnswer: "Cognito User Pools",
    answerOptions: [
      "Cognito Sync",
      "API Gateway",
      "Cognito Identity Pools",
      "Cognito User Pools",
    ],
    correctAnswerExplanation:
      "After successful authentication,Cognito returns user pool tokens to your app. You can use the tokens to grant your users access to your own server-side resources, or to theAPI Gateway. Cognito user pools implement ID, access, and refresh tokens as defined by the OpenID Connect (OIDC) open standard.The ID token is a JSON Web Token (JWT) that contains claims about the identity of the authenticated user such as name, email, and phone_number. You can use this identity info inside your application. The ID token can also be used to authenticate users against your resource servers or server applications.",
    incorrectAnswersExplaination:
      "API Gateway - If you are processing tokens server-side and using other programming languages not supported in AWS it may be a good choice. Other than that, go with a service already providing the functionality.Cognito Identity Pools - You can use Identity pools to grant your users access to other AWS services. With an identity pool, your users can obtain temporary AWS credentials to access AWS services, such asS3 and DynamoDB. Identity pools support anonymous guest users, as well as the specific identity providers that you can use to authenticate users for identity pools.Cognito Sync -Cognito Sync is an AWS service and client library that enables cross-device syncing of application-related user data. You can use it to synchronize user profile data across mobile devices and the web without requiring your own backend.",
  },
  {
    id: 4,
    question:
      "A company is creating a gaming application that will be deployed on mobile devices. The application will send data to a Lambda function-based RESTful API. The application will assign each API request a unique identifier. The volume of API requests from the application can randomly vary at any given time of day. During request throttling, the application might need to retry requests. The API must be able to address duplicate requests without inconsistencies or data loss.Which of the following would you recommend to handle these requirements?",
    correctAnswer:
      "Persist the unique identifier for each request in a DynamoDB table. Change the Lambda function to check the table for the identifier before processing the request",
    answerOptions: [
      "Persist the unique identifier for each request in a DynamoDB table. Change the Lambda function to check the table for the identifier before processing the request",
      "Persist the unique identifier for each request in an ElastiCache for Memcached cache. Change the Lambda function to check the cache for the identifier before processing the request",
      "Persist the unique identifier for each request in an RDS MySQL table. Change the Lambda function to check the table for the identifier before processing the request",
      "Persist the unique identifier for each request in a DynamoDB table. Change the Lambda function to send a client error response when the function receives a duplicate request",
    ],
    correctAnswerExplanation:
      "DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data import and export tools. On-demand backup and restore allows you to create full backups of your DynamoDB. Point-in-time recovery (PITR) helps protect your DynamoDB tables from accidental write or delete operations. PITR provides continuous backups of your DynamoDB table data, and you can restore that table to any point in time up to the second during the preceding 35 days.These features ensure that there is no data loss for the application, thereby meeting a key requirement for the given use case. The solution should also be able to address any duplicate requests without inconsistencies, so the Lambda function should be changed to inspect the table for the given identifier and process the request only if the identifier is unique.",
    incorrectAnswersExplaination:
      "Persist the unique identifier for each request in an ElastiCache for Memcached cache. Change the Lambda function to check the cache for the identifier before processing the request - Memcached is designed for simplicity and it does not offer any snapshot or replication features. This can lead to data loss for applications. Therefore, this option is not the right fit for the given use case.Persist the unique identifier for each request in an RDS MySQL table. Change the Lambda function to check the table for the identifier before processing the request - DynamoDB is a better fit than RDS MySQL to handle massive traffic spikes for write requests. DynamoDB is a key-value and document database that supports tables of virtually any size with horizontal scaling. DynamoDB scales to more than 10 trillion requests per day and with tables that have more than ten million read and write requests per second and petabytes of data storage. DynamoDB can be used to build applications that need consistent single-digit millisecond performance. MySQL RDS can be scaled vertically, however, it cannot match the performance benefits offered by DynamoDB for the given use case. Persist the unique identifier for each request in a DynamoDB table. Change the Lambda function to send a client error response when the function receives a duplicate request - The solution should be able to address any duplicates without any inconsistencies. If Lambda sends a client error response upon receiving a duplicate request, it represents an inconsistent response. So this option is incorrect.",
  },
  {
    id: 5,
    question:
      "A developer has been asked to create a web application to be deployed on EC2 instances. The developer just wants to focus on writing application code without worrying about server provisioning, configuration and deployment.  Which AWS service would you recommend for the given use-case?",
    correctAnswer: "Elastic Beanstalk",
    answerOptions: [
      "Elastic Beanstalk",
      "CloudFormation",
      "CodeDeploy",
      "Serverless Application Model",
    ],
    correctAnswerExplanation:
      "AWS Elastic Beanstalk provides an environment to easily deploy and run applications in the cloud. It is integrated with developer tools and provides a one-stop experience for you to manage the lifecycle of your applications.AWS Elastic Beanstalk lets you manage all of the resources that run your application as environments where each environment runs only a single application version at a time. When an environment is being created, Elastic Beanstalk provisions all the required resources needed to run the application version. You don't need to worry about server provisioning, configuration, and deployment as that's taken care of by Beanstalk.",
    incorrectAnswersExplaination:
      "CloudFormation - AWS CloudFormation is a service that gives developers and businesses an easy way to create a collection of related AWS and third-party resources and provision them in an orderly and predictable fashion. With CloudFormation, you still need to create a template to specify the type of resources you need, hence this option is not correct. CodeDeploy - AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such asEC2, AWS Fargate, AWS Lambda, and your on-premises servers. AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications. It can deploy an application to an instance but it cannot provision the instance. Serverless Application Model - The AWS Serverless Application Model (AWS SAM) is an open-source framework for building serverless applications. It provides shorthand syntax to express functions, APIs, databases, and event source mappings. You define the application you want with just a few lines per resource and model it using YAML. As the web application needs to be deployed on EC2 instances, so this option is ruled out.",
  },
  {
    id: 6,
    question:
      "A developer has been asked to create an application that can be deployed across a fleet of EC2 instances. The configuration must allow for full control over the deployment steps using the blue-green deployment. Which service will help you achieve that?",
    correctAnswer: "CodeDeploy",
    answerOptions: [
      "CodePipeline",
      "Elastic Beanstalk",
      "CodeDeploy",
      "CodeBuild",
    ],
    correctAnswerExplanation:
      "AWS CodeDeploy is a deployment service that automates application deployments toEC2 instances, on-premises instances, or serverless Lambda functions. AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. The blue/green deployment type uses the blue/green deployment model controlled by CodeDeploy. This deployment type enables you to verify a new deployment of service before sending production traffic to it.",
    incorrectAnswersExplaination:
      "CodeBuild - AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. It cannot be used to deploy applications. Elastic Beanstalk - AWS Elastic Beanstalk offers hooks but not as much control as CodeDeploy. Because AWS Elastic Beanstalk performs an in-place update when you update your application versions, your application can become unavailable to users for a short period of time. You can avoid this downtime by performing a blue/green deployment, where you deploy the new version to a separate environment, and then swap CNAMEs of the two environments to redirect traffic to the new version instantly. CodePipeline - CodePipeline automates the build, test, and deploy phases of your release process every time there is a code change. CodePipeline by itself cannot deploy applications.",
  },
  {
    id: 7,
    question:
      "A dev team lead is responsible for managing access for her IAM principals. At the start of the cycle, she has granted excess privileges to users to keep them motivated for trying new things. She now wants to ensure that the team has only the minimum permissions required to finish their work. Which of the following will help her identify unused IAM roles and remove them without disrupting any service?",
    correctAnswer: "Access Advisor feature on IAM console",
    answerOptions: [
      "AWS Trusted Advisor",
      "Access Advisor feature on IAM console",
      "IAM Access Analyzer",
      " Inspector",
    ],
    correctAnswerExplanation:
      "To help identify the unused roles, IAM reports the last-used timestamp that represents when a role was last used to make an AWS request. Your security team can use this info to identify, analyze, and then confidently remove unused roles. This helps improve the security posture of your AWS environments. Additionally, by removing unused roles, you can simplify your monitoring and auditing efforts by focusing only on roles that are in use.",
    incorrectAnswersExplaination:
      "AWS Trusted Advisor - AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices on cost optimization, security, fault tolerance, service limits, and performance improvement. IAM Access Analyzer - AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such asS3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk.Inspector -Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices.",
  },
  {
    id: 8,
    question:
      "The dev team has just configured and attached the IAM policy needed to access AWS Billing and Cost Management for all users under the Finance department. But, the users are unable to see AWS Billing and Cost Management service in the AWS console. What could be the reason for this issue?",
    correctAnswer:
      "You need to activate IAM user access to the Billing and Cost Management console for all the users who need access",
    answerOptions: [
      "The users might have another policy that restricts them from accessing the Billing info",
      "Only root user has access to AWS Billing and Cost Management console",
      "IAM user should be created under AWS Billing and Cost Management and not under the AWS account to have access to Billing console",
      "You need to activate IAM user access to the Billing and Cost Management console for all the users who need access",
    ],
    correctAnswerExplanation:
      "By default, IAM users do not have access to the AWS Billing and Cost Management console. You or your account admin must grant users access. You can do this by activating IAM user access to the Billing and Cost Management console and attaching an IAM policy to your users. Then, you need to activate IAM user access for IAM policies to take effect. You only need to activate IAM user access once.",
    incorrectAnswersExplaination:
      "The users might have another policy that restricts them from accessing the Billing info - This is an incorrect option, as deduced from the given use-case. Only root user has access to AWS Billing and Cost Management console - This is an incorrect statement. AWS Billing and Cost Management access can be provided to any user through user activation and policies, as discussed above. IAM user should be created under AWS Billing and Cost Management and not under the AWS account to have access to Billing console - IAM is a feature of your AWS account. All IAM users are created and managed from a single place, irrespective of the services they wish to you.",
  },
  {
    id: 9,
    question:
      "You created an Elastic Load Balancer that has marked all the EC2 instances in the target group as unhealthy. Surprisingly, when you enter the IP address of the EC2 instances in your web browser, you can access your website. What could be the reason your instances are being marked as unhealthy? (Select two)",
    correctAnswer: [
      "The security group of the EC2 instance does not allow for traffic from the security group of the Application Load Balancer",
      "The route for the health check is misconfigured",
    ],
    answerOptions: [
      "The security group of the EC2 instance does not allow for traffic from the security group of the Application Load Balancer",
      "The route for the health check is misconfigured",
      "The EBS volumes have been improperly mounted",
      "Your web-app has a runtime that is not supported by the Application Load Balancer",
      "You need to attach Elastic IP to the EC2 instances",
    ],
    correctAnswerExplanation:
      "You must ensure that your load balancer can communicate with registered targets on both the listener port and the health check port. Whenever you add a listener to your load balancer or update the health check port for a target group used by the load balancer to route requests, you must verify that the security groups associated with the load balancer allow traffic on the new port in both directions.",
    incorrectAnswersExplaination:
      "The EBS volumes have been improperly mounted - You can access the website using the IP address which means there is no issue with the EBS volumes. So this option is not correct. Your web-app has a runtime that is not supported by the Application Load Balancer - There is no connection between a web app and the application load balancer. This option has been added as a distractor. You need to attach Elastic IP to the EC2 instances - This option is a distractor as Elastic IPs do not need to be assigned to EC2 instances while using an Application Load Balancer.",
  },
  {
    id: 10,
    question:
      "A Developer at a company is working on a CloudFormation template to use resources. Resources will be defined using code and provisioned based on certain conditions defined in the Conditions section. Which section of a CloudFormation template cannot be associated with Condition?",
    correctAnswer: "Parameters",
    answerOptions: ["Resources", "Parameters", "Conditions", "Outputs"],
    correctAnswerExplanation:
      "Parameters enable you to input custom values to your CloudFormation template each time you create or update a stack.",
    incorrectAnswersExplaination:
      "Resources - Resources section describes the resources that you want to provision in your AWS CloudFormation stacks. You can associate conditions with the resources that you want to conditionally create. Conditions - You actually define conditions in this section of the CloudFormation template. Outputs - The optional Outputs section declares output values that you can import into other stacks (to create cross-stack references), return in response (to describe stack calls), or view on the AWS CloudFormation console. For example, you can output the S3 bucket name for a stack to make the bucket easier to find. You can associate conditions with the outputs that you want to conditionally create.",
  },
  {
    id: 11,
    question:
      "A developer is configuring a bucket policy that denies upload object permission to any requests that do not include the x-amz-server-side-encryption header requesting server-side encryption with SSE-KMS for anS3 bucket - examplebucket. Which of the following policies is the right fit for the given requirement?",
    correctAnswer: `{ "Version":"2012-10-17", "Id":"PutObjectPolicy", "Statement":[{ "Sid":"DenyUnEncryptedObjectUploads", "Effect":"Deny", "Principal":"", "Action":"s3:PutObject", "Resource":"arn:aws:s3:::examplebucket/", "Condition":{ "StringNotEquals":{ "s3:x-amz-server-side-encryption":"aws:kms" } } } ] }`,
    answerOptions: [
      `{ "Version":"2012-10-17", "Id":"PutObjectPolicy", "Statement":[{ "Sid":"DenyUnEncryptedObjectUploads", "Effect":"Deny", "Principal":"", "Action":"s3:PutObject", "Resource":"arn:aws:s3:::examplebucket/", "Condition":{ "StringEquals":{ "s3:x-amz-server-side-encryption":"aws:kms" } } } ] }`,
      `{ "Version":"2012-10-17", "Id":"PutObjectPolicy", "Statement":[{ "Sid":"DenyUnEncryptedObjectUploads", "Effect":"Deny", "Principal":"", "Action":"s3:GetObject", "Resource":"arn:aws:s3:::examplebucket/", "Condition":{ "StringNotEquals":{ "s3:x-amz-server-side-encryption":"aws:AES256" } } } ] }`,
      `{ "Version":"2012-10-17", "Id":"PutObjectPolicy", "Statement":[{ "Sid":"DenyUnEncryptedObjectUploads", "Effect":"Deny", "Principal":"", "Action":"s3:PutObject", "Resource":"arn:aws:s3:::examplebucket/", "Condition":{ "StringNotEquals":{ "s3:x-amz-server-side-encryption":"false" } } } ] }`,
      `{ "Version":"2012-10-17", "Id":"PutObjectPolicy", "Statement":[{ "Sid":"DenyUnEncryptedObjectUploads", "Effect":"Deny", "Principal":"", "Action":"s3:PutObject", "Resource":"arn:aws:s3:::examplebucket/", "Condition":{ "StringNotEquals":{ "s3:x-amz-server-side-encryption":"aws:kms" } } } ] }`,
    ],
    correctAnswerExplanation:
      "This bucket policy denies upload object (s3:PutObject) permission if the request does not include the x-amz-server-side-encryption header requesting server-side encryption with SSE-KMS. To ensure that a particular AWS KMS CMK be used to encrypt the objects in a bucket, you can use the s3:x-amz-server-side-encryption-aws-kms-key-id condition key. To specify the AWS KMS CMK, you must use a key Amazon Resource Name (ARN) that is in the arn:aws:kms:region:acct-id:key/key-id format. When you upload an object, you can specify the AWS KMS CMK using the x-amz-server-side-encryption-aws-kms-key-id header. If the header is not present in the request,S3 assumes the AWS-managed CMK.",
    incorrectAnswersExplaination: `{ "Version":"2012-10-17", "Id":"PutObjectPolicy", "Statement":[{ "Sid":"DenyUnEncryptedObjectUploads", "Effect":"Deny", "Principal":"", "Action":"s3:PutObject", "Resource":"arn:aws:s3:::examplebucket/", "Condition":{ "StringEquals":{ "s3:x-amz-server-side-encryption":"aws:kms" } } } ] } - The condition is incorrect in this policy. The condition should use StringNotEquals. { "Version":"2012-10-17", "Id":"PutObjectPolicy", "Statement":[{ "Sid":"DenyUnEncryptedObjectUploads", "Effect":"Deny", "Principal":"", "Action":"s3:GetObject", "Resource":"arn:aws:s3:::examplebucket/", "Condition":{ "StringNotEquals":{ "s3:x-amz-server-side-encryption":"aws:AES256" } } } ] } - AES256 is used forS3-managed encryption keys (SSE-S3).S3 server-side encryption uses one of the strongest block ciphers available to encrypt your data, 256-bit Advanced Encryption Standard (AES-256). { "Version":"2012-10-17", "Id":"PutObjectPolicy", "Statement":[{ "Sid":"DenyUnEncryptedObjectUploads", "Effect":"Deny", "Principal":"", "Action":"s3:PutObject", "Resource":"arn:aws:s3:::examplebucket/", "Condition":{ "StringNotEquals":{ "s3:x-amz-server-side-encryption":"false" } } } ] } - The condition is incorrect in this policy. The condition should use "s3:x-amz-server-side-encryption":"aws:kms".`,
  },
  {
    id: 12,
    question:
      "A firm runs its technology operations on a fleet ofEC2 instances. The firm needs a certain software to be available on the instances to support their daily workflows. The developer team has been told to use the user data feature of EC2 instances. Which of the following are true about the user data EC2 configuration? ( Select two)",
    correctAnswer: [
      "By default, scripts entered as user data are executed with root user privileges",
      "By default, user data runs only during the boot cycle when you first launch an instance",
    ],
    answerOptions: [
      "By default, scripts entered as user data are executed with root user privileges",
      "By default, user data runs only during the boot cycle when you first launch an instance",
      "By default, user data is executed every time an EC2 instance is re-started",
      "When an instance is running, you can update user data by using root user credentials",
      "By default, scripts entered as user data do not have root user privileges for executing",
    ],
    correctAnswerExplanation:
      "User Data is generally used to perform common automated configuration tasks and even run scripts after the instance starts. When you launch an instance inEC2, you can pass two types of user data - shell scripts and cloud-init directives. You can also pass this data into the launch wizard as plain text or as a file. By default, scripts entered as user data are executed with root user privileges - Scripts entered as user data are executed as the root user, hence do not need the sudo command in the script. Any files you create will be owned by root; if you need non-root users to have file access, you should modify the permissions accordingly in the script. By default, user data runs only during the boot cycle when you first launch an instance - By default, user data scripts and cloud-init directives run only during the boot cycle when you first launch an instance. You can update your configuration to ensure that your user data scripts and cloud-init directives run every time you restart your instance.",
    incorrectAnswersExplaination:
      "By default, user data is executed every time an EC2 instance is re-started - As discussed above, this is not a default configuration of the system. But, can be achieved by explicitly configuring the instance. When an instance is running, you can update user data by using root user credentials - You can't change the user data if the instance is running (even by using root user credentials), but you can view it. By default, scripts entered as user data do not have root user privileges for executing - Scripts entered as user data are executed as the root user, hence do not need the sudo command in the script.",
  },
  {
    id: 13,
    question:
      "You configure policies for your team. Which of the following policy types only limit permissions but cannot grant permissions (Select two)?",
    correctAnswer: [
      "AWS Organizations Service Control Policy (SCP)",
      "Permissions boundary",
    ],
    answerOptions: [
      "AWS Organizations Service Control Policy (SCP)",
      "Access control list (ACL)",
      "Resource-based policy",
      "Identity-based policy",
      "Permissions boundary",
    ],
    correctAnswerExplanation:
      "AWS Organizations Service Control Policy (SCP) – Use an AWS Organizations Service Control Policy (SCP) to define the maximum permissions for account members of an organization or organizational unit (OU). SCPs limit permissions that identity-based policies or resource-based policies grant to entities (users or roles) within the account, but do not grant permissions. Permissions boundary - Permissions boundary is a managed policy that is used for an IAM entity (user or role). The policy defines the maximum permissions that the identity-based policies can grant to an entity, but does not grant permissions.",
    incorrectAnswersExplaination:
      "Access control list (ACL) - Use ACLs to control which principals in other accounts can access the resource to which the ACL is attached. ACLs are similar to resource-based policies, although they are the only policy type that does not use the JSON policy document structure. ACLs are cross-account permissions policies that grant permissions to the specified principal. Resource-based policy - Resource-based policies grant permissions to the principal that is specified in the policy. Principals can be in the same account as the resource or in other accounts. The most common examples of resource-based policies areS3 bucket policies and IAM role trust policies. Identity-based policy - Help attach managed and inline policies to IAM identities (users, groups to which users belong, or roles). Identity-based policies grant permissions to an identity.",
  },
  {
    id: 14,
    question:
      "A YAML document represents a serverless application architecture. The document's first line has Transform: 'AWS::Serverless-2016-10-31'. What does the Transform section in the document represent?",
    correctAnswer:
      "Presence of 'Transform' section indicates it is a Serverless Application Model (SAM) template",
    answerOptions: [
      "It represents a Lambda function definition",
      "It represents an intrinsic function",
      "Presence of 'Transform' section indicates it is a CloudFormation Parameter",
      "Presence of 'Transform' section indicates it is a Serverless Application Model (SAM) template",
    ],
    correctAnswerExplanation:
      "AWS CloudFormation template is a JSON- or YAML-formatted text file that describes your AWS infrastructure. Templates include several major sections. The Resources section is the only required section. The optional Transform section specifies one or more macros that AWS CloudFormation uses to process your template. The AWS Serverless Application Model (SAM) is an open-source framework for building serverless applications. It provides shorthand syntax to express functions, APIs, databases, and event source mappings. With just a few lines per resource, you can define the application you want and model it using YAML. Presence of Transform section indicates it is a Serverless Application Model (SAM) template - The AWS::Serverless transform, which is a macro hosted by AWS CloudFormation, takes an entire template written in the AWS Serverless Application Model (AWS SAM) syntax and transforms and expands it into a compliant AWS CloudFormation template. So, presence of Transform section indicates, the document is a SAM template.",
    incorrectAnswersExplaination:
      "It represents a Lambda function definition - Lambda function is created using AWS::Lambda::Function resource and has no connection to 'Transform' section. It represents an intrinsic function - Intrinsic Functions in templates are used to assign values to properties that are not available until runtime. They usually start with Fn:: or !. Example: !Sub or Fn::Sub. Presence of 'Transform' section indicates it is a CloudFormation Parameter - CloudFormation parameters are part of Parameters block of the template.",
  },
  {
    id: 15,
    question:
      "A company is migrating its on-premises database to RDS for PostgreSQL. The company has read-heavy workloads. The dev team wants to refactor code for optimal SQL query read performance. Which solution meets this requirement with the least current as well as future development effort?",
    correctAnswer:
      "UseRDS with one or more read replicas. Refactor the application code so that the queries use the endpoint for the read replicas",
    answerOptions: [
      "UseRDS with one or more read replicas. Refactor the application code so that the queries use the endpoint for the read replicas",
      "Configure Elasticache for Redis to act as a caching layer forRDS. Refactor the application code so that the queries use the Elasticache for Redis endpoint",
      "Configure Elasticache for Memcached to act as a caching layer forRDS. Refactor the application code so that the queries use the Elasticache for Memcached endpoint",
      "UseRDS in the multi-AZ configuration with a single standby instance. Refactor the application code so that the queries use the standby instance endpoint",
    ],
    correctAnswerExplanation:
      "RDS uses the PostgreSQL DB engine's built-in replication functionality to create a special type of DB instance called a read replica from a source DB instance. The source DB instance becomes the primary DB instance. Updates made to the primary DB instance are asynchronously copied to the read replica. You can reduce the load on your primary DB instance by routing read queries from your applications to the read replica. Using read replicas, you can elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. For the given use case, you can achieve optimum read performance for SQL queries by using the read-replica endpoint for the read-heavy workload.",
    incorrectAnswersExplaination:
      "Configure Elasticache for Redis to act as a caching layer forRDS. Refactor the application code so that the queries use the Elasticache for Redis endpoint. Configure Elasticache for Memcached to act as a caching layer forRDS. Refactor the application code so that the queries use the Elasticache for Memcached endpoint. Both Redis and Memcached are popular, open-source, in-memory data stores (also known as in-memory caches). These are not relational databases and cannot be used to run SQL queries. So, both these options are incorrect. UseRDS in the multi-AZ configuration with a single standby instance. Refactor the application code so that the queries use the standby instance endpoint - In anRDS Multi-AZ deployment with a single standby instance,RDS automatically creates a primary database (DB) instance and synchronously replicates the data to an instance in a different AZ. When it detects a failure,RDS automatically fails over to a standby instance without manual intervention. You cannot route the read queries from an application to the standby instance of a multi-AZ RDS database as it's not accessible for the read traffic in the single standby instance configuration.",
  },
  {
    id: 16,
    question:
      "A developer is testing Simple Queue Service (SQS) queues in a dev environment. The queue along and its contents must be deleted after testing. Which SQS API should be used?",
    correctAnswer: "DeleteQueue",
    answerOptions: ["", "", "", ""],
    correctAnswerExplanation:
      "Deletes the queue specified by the QueueUrl, regardless of the queue's contents. When you delete a queue, any messages in the queue are no longer available. When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a SendMessage request might succeed, but after 60 seconds the queue and the message you sent no longer exist. When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.",
    incorrectAnswersExplaination:
      "PurgeQueue - Deletes the messages in a queue specified by the QueueURL parameter. When you use the PurgeQueue action, you can't retrieve any messages deleted from a queue. The queue however remains. RemoveQueue - This is an invalid option, given only as a distractor. RemovePermission - Revokes any permissions in the queue policy that matches the specified Label parameter.",
  },
  {
    id: 17,
    question:
      "An E-commerce business, has its applications built on a fleet ofEC2 instances, spread across various Regions and AZs. The technical team has suggested using Elastic Load Balancers for better architectural design. What characteristics of an Elastic Load Balancer make it a winning choice? (Select two)",
    correctAnswer: [
      "Separate public traffic from private traffic",
      "Build a highly available system",
    ],
    answerOptions: [
      "The Load Balancer communicates with the underlying EC2 instances using their public IPs",
      "Separate public traffic from private traffic",
      "Build a highly available system",
      "Improve vertical scalability of the system",
      "Deploy EC2 instances across multiple AWS Regions",
    ],
    correctAnswerExplanation:
      "A load balancer accepts incoming traffic from clients and routes requests to its registered targets (such as EC2 instances) in one or more Availability Zones. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. When the load balancer detects an unhealthy target, it stops routing traffic to that target. It then resumes routing traffic to that target when it detects that the target is healthy again. Elastic Load Balancing supports three types of load balancers: Application Load Balancers. Network Load Balancers. Classic Load Balancers. Separate public traffic from private traffic - The nodes of an internet-facing load balancer have public IP addresses. Load balancers route requests to your targets using private IP addresses. Therefore, your targets do not need public IP addresses to receive requests from users over the internet. Build a highly available system - Elastic Load Balancing provides fault tolerance for your applications by automatically balancing traffic across targets –EC2 instances, containers, IP addresses, and Lambda functions – in multiple Availability Zones while ensuring only healthy targets receive traffic.",
    incorrectAnswersExplaination:
      "The Load Balancer communicates with the underlying EC2 instances using their public IPs - This is an incorrect statement. The Load Balancer communicates with the underlying EC2 instances using their private IPs. Improve vertical scalability of the system - This is an incorrect statement. Elastic Load Balancers can connect with Auto Scaling groups to provide horizontal scaling. Deploy EC2 instances across multiple AWS Regions - A Load Balancer can target EC2 instances only within an AWS Region.",
  },
  {
    id: 18,
    question:
      "You are creating policies and attaching them to IAM identities. After creating necessary Identity-based policies, you now creating Resource-based policies. Which is the only resource-based policy that the IAM service supports?",
    correctAnswer: "Trust policy",
    answerOptions: [
      "AWS Organizations Service Control Policies (SCP)",
      "Trust policy",
      "Access control list (ACL)",
      "Permissions boundary",
    ],
    correctAnswerExplanation:
      "You manage access in AWS by creating policies and attaching them to IAM identities (users, groups of users, or roles) or AWS resources. A policy is an object in AWS that, when associated with an identity or resource, defines their permissions. Resource-based policies are JSON policy documents that you attach to a resource such as anS3 bucket. These policies grant the specified principal permission to perform specific actions on that resource and define under what conditions this applies. Trust policy - Trust policies define which principal entities (accounts, users, roles, and federated users) can assume the role. An IAM role is both an identity and a resource that supports resource-based policies. For this reason, you must attach both a trust policy and an identity-based policy to an IAM role. The IAM service supports only one type of resource-based policy called a role trust policy, which is attached to an IAM role.",
    incorrectAnswersExplaination:
      "AWS Organizations Service Control Policies (SCP) - If you enable all features of AWS organization, then you can apply service control policies (SCPs) to any or all of your accounts. SCPs are JSON policies that specify the maximum permissions for an organization or organizational unit (OU). The SCP limits permissions for entities in member accounts, including each AWS account root user. An explicit deny in any of these policies overrides the allow. Access control list (ACL) - Access control lists (ACLs) are service policies that allow you to control which principals in another account can access a resource. ACLs cannot be used to control access for a principal within the same account.S3, AWS WAF, andVPC are examples of services that support ACLs. Permissions boundary - AWS supports permissions boundaries for IAM entities (users or roles). A permissions boundary is an advanced feature for using a managed policy to set the maximum permissions that an identity-based policy can grant to an IAM entity. An entity's permissions boundary allows it to perform only the actions that are allowed by both its identity-based policies and its permissions boundaries.",
  },
  {
    id: 19,
    question:
      "You run workloads on AWS and have embedded RDS database connection strings within each web server hosting your applications. After failing a security audit, you are looking at a different approach to store your secrets securely and automatically rotate the database credentials. Which AWS service can you use to address this use-case?",
    correctAnswer: "Secrets Manager",
    answerOptions: [
      "SSM Parameter Store",
      "Systems Manager",
      "KMS",
      "Secrets Manager",
    ],
    correctAnswerExplanation:
      "Secrets Manager enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. Users and applications retrieve secrets with a call to Secrets Manager APIs, eliminating the need to hardcode sensitive info in plain text. Secrets Manager offers secret rotation with built-in integration forRDS,Redshift, andDocumentDB.",
    incorrectAnswersExplaination:
      "SSM Parameter Store - AWS Systems Manager Parameter Store provides secure, hierarchical storage for configuration data management and secrets management. You can store data such as passwords, database strings, and license codes as parameter values. SSM Parameter Store cannot be used to automatically rotate the database credentials. Systems Manager gives you visibility and control of your infrastructure on AWS. Systems Manager provides a unified user interface so you can view operational data from multiple AWS services and allows you to automate operational tasks across your AWS resources. Systems Manager cannot be used to store your secrets securely and automatically rotate the database credentials. KMS - AWS Key Management Service (KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications. KMS cannot be used to store your secrets securely and automatically rotate the database credentials.",
  },
  {
    id: 20,
    question:
      "A developer has an application that stores data in anS3 bucket. The application uses an HTTP API to store and retrieve objects. When the PutObject API operation adds objects to the S3 bucket the developer must encrypt these objects at rest by using server-side encryption withS3-managed keys (SSE-S3). Which solution will guarantee that any upload request without the mandated encryption is not processed?",
    correctAnswer:
      "Invoke the PutObject API operation and set the x-amz-server-side-encryption header as AES256. Use an S3 bucket policy to deny permission to upload an object unless the request has this header",
    answerOptions: [
      "Invoke the PutObject API operation and set the x-amz-server-side-encryption header as aws:kms. Use an S3 bucket policy to deny permission to upload an object unless the request has this header",
      "Invoke the PutObject API operation and set the x-amz-server-side-encryption header as AES256. Use an S3 bucket policy to deny permission to upload an object unless the request has this header",
      "Invoke the PutObject API operation and set the x-amz-server-side-encryption header as sse:s3. Use an S3 bucket policy to deny permission to upload an object unless the request has this header",
      "Set the encryption key for SSE-S3 in the HTTP header of every request. Use an S3 bucket policy to deny permission to upload an object unless the request has this header",
    ],
    correctAnswerExplanation:
      "SSE-S3 server-side encryption protects data at rest.S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a key that it rotates regularly.S3 server-side encryption uses one of the strongest block ciphers available to encrypt your data, 256-bit Advanced Encryption Standard (AES-256).",
    incorrectAnswersExplaination:
      "Invoke the PutObject API operation and set the x-amz-server-side-encryption header as aws:kms. Use an S3 bucket policy to deny permission to upload an object unless the request has this header - As mentioned above, you need to use AES256 rather than aws:kms for the given use case. aws:kms is used when you want to use server-side encryption with AWS KMS (SSE-KMS). Invoke the PutObject API operation and set the x-amz-server-side-encryption header as sse:s3. Use an S3 bucket policy to deny permission to upload an object unless the request has this header - This is a made-up option as the x-amz-server-side-encryption header has no such value as sse:s3. Set the encryption key for SSE-S3 in the HTTP header of every request. Use an S3 bucket policy to deny permission to upload an object unless the request has this header - This option has been added as a distractor. For SSE-S3,S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a key that it rotates regularly. The encryption key for SSE-S3 encryption key cannot be accessed.",
  },
  {
    id: 21,
    question:
      "After a test deployment in ElasticBeanstalk environment, a developer noticed that all accumulatedEC2 burst balances were lost. Which of the following options can lead to this behavior?",
    correctAnswer:
      "The deployment was either run with immutable updates or in traffic splitting mode",
    answerOptions: [
      "The deployment was either run with immutable updates or in traffic splitting mode",
      "The deployment was run as a Rolling deployment, resulting in the resetting of EC2 burst balances",
      "The deployment was run as a All-at-once deployment, flushing all the accumulated EC2 burst balances",
      "When a canary deployment fails, it resets the EC2 burst balances to zero",
    ],
    correctAnswerExplanation:
      "Immutable deployments perform an immutable update to launch a full set of new instances running the new version of the application in a separate Auto Scaling group, alongside the instances running the old version. Immutable deployments can prevent issues caused by partially completed rolling deployments. Traffic-splitting deployments let you perform canary testing as part of your application deployment. In a traffic-splitting deployment, Elastic Beanstalk launches a full set of new instances just like during an immutable deployment. It then forwards a specified percentage of incoming client traffic to the new application version for a specified evaluation period. Some policies replace all instances during the deployment or update. This causes all accumulatedEC2 burst balances to be lost. It happens in the following cases: Managed platform updates with instance replacement enabled. Immutable updates. Deployments with immutable updates or traffic splitting enabled",
    incorrectAnswersExplaination:
      "The deployment was run as a Rolling deployment, resulting in the resetting of EC2 burst balances - With rolling deployments, Elastic Beanstalk splits the environment'sEC2 instances into batches and deploys the new version of the application to one batch at a time. Rolling deployments do not result in loss of EC2 burst balances. The deployment was run as a All-at-once deployment, flushing all the accumulated EC2 burst balances - The traditional All-at-once deployment, wherein all the instances are updated simultaneously, does not result in loss of EC2 burst balances. When a canary deployment fails, it resets the EC2 burst balances to zero - This is incorrect and given only as a distractor.",
  },
  {
    id: 22,
    question:
      "A cybersecurity firm wants to run their applications on single-tenant hardware to meet security guidelines. Which of the following is the MOST cost-effective way of isolating theirEC2 instances to a single tenant?",
    correctAnswer: "Dedicated Instances",
    answerOptions: [
      "Dedicated Instances",
      "Spot Instances",
      "Dedicated Hosts",
      "On-Demand Instances",
    ],
    correctAnswerExplanation:
      "Dedicated Instances areEC2 instances that run in a virtual private cloud (VPC) on hardware that's dedicated to a single customer. Dedicated Instances that belong to different AWS accounts are physically isolated at a hardware level, even if those accounts are linked to a single-payer account. However, Dedicated Instances may share hardware with other instances from the same AWS account that are not Dedicated Instances. A Dedicated Host is also a physical server that's dedicated for your use. With a Dedicated Host, you have visibility and control over how instances are placed on the server.",
    incorrectAnswersExplaination:
      "Spot Instances - A Spot Instance is an unused EC2 instance that is available for less than the On-Demand price. Your Spot Instance runs whenever capacity is available and the maximum price per hour for your request exceeds the Spot price. Any instance present with unused capacity will be allocated. Even though this is cost-effective, it does not fulfill the single-tenant hardware requirement of the client and hence is not the correct option. Dedicated Hosts - AnEC2 Dedicated Host is a physical server with EC2 instance capacity fully dedicated to your use. Dedicated Hosts allow you to use your existing software licenses on EC2 instances. With a Dedicated Host, you have visibility and control over how instances are placed on the server. This option is costlier than the Dedicated Instance and hence is not the right choice for the current requirement. On-Demand Instances - With On-Demand Instances, you pay for compute capacity by the second with no long-term commitments. You have full control over its lifecycle—you decide when to launch, stop, hibernate, start, reboot, or terminate it. Hardware isolation is not possible and on-demand has one of the costliest instance charges and hence is not the correct answer for current requirements.",
  },
  {
    id: 23,
    question:
      "An e-commerce company developed an API that is hosted onECS. Variable traffic spikes on the application are causing order processing to take too long. The application processes orders usingSQS queues. The ApproximateNumberOfMessagesVisible metric spikes at very high values throughout the day which triggers the CloudWatch alarm. Other ECS metrics for the API containers are well within limits. Which of the following will you recommend for improving performance while keeping costs low?",
    correctAnswer:
      "Use backlog per instance metric with target tracking scaling policy",
    answerOptions: [
      "Use backlog per instance metric with target tracking scaling policy",
      "Use Docker swarm",
      "Use ECS service scheduler",
      "Use ECS step scaling policy",
    ],
    correctAnswerExplanation:
      "If you use a target tracking scaling policy based on a customSQS queue metric, dynamic scaling can adjust to the demand curve of your application more effectively. The issue with using a CloudWatchSQS metric like ApproximateNumberOfMessagesVisible for target tracking is that the number of messages in the queue might not change proportionally to the size of the Auto Scaling group that processes messages from the queue. That's because the number of messages in your SQS queue does not solely define the number of instances needed. The number of instances in your Auto Scaling group can be driven by multiple factors, including how long it takes to process a message and the acceptable amount of latency (queue delay). The solution is to use a backlog per instance metric with the target value being the acceptable backlog per instance to maintain. You can calculate these numbers as follows: Backlog per instance: To calculate your backlog per instance, start with the ApproximateNumberOfMessages queue attribute to determine the length of the SQS queue (number of messages available for retrieval from the queue). Divide that number by the fleet's running capacity, which for an Auto Scaling group is the number of instances in the InService state, to get the backlog per instance. Acceptable backlog per instance: To calculate your target value, first determine what your application can accept in terms of latency. Then, take the acceptable latency value and divide it by the average time that an EC2 instance takes to process a message. To illustrate with an example, let's say that the current ApproximateNumberOfMessages is 1500 and the fleet's running capacity is 10. If the average processing time is 0.1 seconds for each message and the longest acceptable latency is 10 seconds, then the acceptable backlog per instance is 10 / 0.1, which equals 100. This means that 100 is the target value for your target tracking policy. If the backlog per instance is currently at 150 (1500 / 10), your fleet scales out, and it scales out by five instances to maintain proportion to the target value.",
    incorrectAnswersExplaination:
      "Use Docker swarm - A Docker swarm is a container orchestration tool, meaning that it allows the user to manage multiple containers deployed across multiple host machines. A swarm has multiple Docker hosts which run in swarm mode and act as managers (to manage membership and delegation) and workers (which run swarm services). Use ECS service scheduler -ECS provides a service scheduler (for long-running tasks and applications), the ability to run tasks manually (for batch jobs or single run tasks), with ECS placing tasks on your cluster for you. You can specify task placement strategies and constraints that allow you to run tasks in the configuration you choose, such as spread out across Availability Zones. It is also possible to integrate with custom or third-party schedulers. Use ECS step scaling policy - Although ECS Service Auto Scaling supports using Application Auto Scaling step scaling policies, AWS recommends using target tracking scaling policies instead. For example, if you want to scale your service when CPU utilization falls below or rises above a certain level, create a target tracking scaling policy based on the CPU utilization metric provided by ECS. With step scaling policies, you create and manage the CloudWatch alarms that trigger the scaling process. If the target tracking alarms don't work for your use case, you can use step scaling. You can also use target tracking scaling with step scaling for an advanced scaling policy configuration. For example, you can configure a more aggressive response when utilization reaches a certain level. Step Scaling scales your cluster on various lengths of steps based on different ranges of thresholds. Target tracking on the other hand intelligently picks the smart lengths needed for the given configuration.",
  },
  {
    id: 24,
    question:
      "Your global organization has an IT infrastructure that is deployed using CloudFormation on AWS Cloud. One employee, in us-east-1 Region, has created a stack 'Application1' and made an exported output with the name 'ELBDNSName'. Another employee has created a stack for a different application 'Application2' in us-east-2 Region and also exported an output with the name 'ELBDNSName'. The first employee wanted to deploy the CloudFormation stack 'Application1' in us-east-2, but it got an error. What is the cause of the error?",
    correctAnswer:
      "Exported Output Values in CloudFormation must have unique names within a single Region",
    answerOptions: [
      "Output Values in CloudFormation must have unique names across all Regions",
      "Exported Output Values in CloudFormation must have unique names within a single Region",
      "Exported Output Values in CloudFormation must have unique names across all Regions",
      "Output Values in CloudFormation must have unique names within a single Region",
    ],
    correctAnswerExplanation:
      "Exported Output Values in CloudFormation must have unique names within a single Region. Using CloudFormation, you can create a template that describes all the AWS resources that you want (like EC2 instances or RDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you. A CloudFormation template has an optional Outputs section which declares output values that you can import into other stacks (to create cross-stack references), return in response (to describe stack calls), or view on the AWS CloudFormation console. For example, you can output the S3 bucket name for a stack to make the bucket easier to find. You can use the Export Output Values to export the name of the resource output for a cross-stack reference. For each AWS account, export names must be unique within a region. In this case, we would have a conflict within us-east-2",
    incorrectAnswersExplaination:
      "Exported Output Values in CloudFormation must have unique names within a single Region. Using CloudFormation, you can create a template that describes all the AWS resources that you want (like EC2 instances or RDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you. A CloudFormation template has an optional Outputs section which declares output values that you can import into other stacks (to create cross-stack references), return in response (to describe stack calls), or view on the AWS CloudFormation console. For example, you can output the S3 bucket name for a stack to make the bucket easier to find. You can use the Export Output Values to export the name of the resource output for a cross-stack reference. For each AWS account, export names must be unique within a region. In this case, we would have a conflict within us-east-2.",
  },
  {
    id: 25,
    question:
      "A multi-national company has multiple business units with each unit having its own AWS account. The development team at the company would like to debug and trace data across accounts and visualize it in a centralized account. Which of the following solutions would you suggest for the given use-case?",
    correctAnswer: "X-Ray",
    answerOptions: [
      "VPC Flow Logs",
      "CloudWatch Events",
      "X-Ray",
      "CloudTrail",
    ],
    correctAnswerExplanation:
      "AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture. With X-Ray, you can understand how your application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors. X-Ray provides an end-to-end view of requests as they travel through your application, and shows a map of your application’s underlying components. You can use X-Ray to collect data across AWS Accounts. The X-Ray agent can assume a role to publish data into an account different from the one in which it is running. This enables you to publish data from various components of your application into a central account.",
    incorrectAnswersExplaination:
      "VPC Flow Logs: VPC Flow Logs is a feature that enables you to capture info about the IP traffic going to and from network interfaces in your VPC. Flow log data is used to analyze network traces and helps with network security. Flow log data can be published to CloudWatch Logs or S3. You cannot use VPC Flow Logs to debug and trace data across accounts.CloudWatch Events: CloudWatch Events delivers a near real-time stream of system events that describe changes in AWS resources. These help to trigger notifications based on changes happening in AWS services. You cannot use CloudWatch Events to debug and trace data across accounts.CloudTrail: With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. You can use AWS CloudTrail to answer questions such as - “Who made an API call to modify this resource?”. CloudTrail provides event history of your AWS account activity thereby enabling governance, compliance, operational auditing, and risk auditing of your AWS account. You cannot use CloudTrail to debug and trace data across accounts.",
  },
  {
    id: 26,
    question:
      "The manager at an IT company wants to use member access to user-specific folders in an S3 bucket - bucket-a. So, user x can only access files in his folder - bucket-a/user/user-x/ and user y can only access files in her folder - bucket-a/user/user-y/ and so on. Which of the following IAM constructs would you recommend so that the policy snippet can be made generic for all team members and the manager does not need to create separate IAM policy for each team member?",
    correctAnswer: "IAM policy variables",
    answerOptions: [
      "IAM policy principal",
      "IAM policy condition",
      "IAM policy resource",
      "IAM policy variables",
    ],
    correctAnswerExplanation: `Instead of creating individual policies for each user, you can use policy variables and create a single policy that applies to multiple users (a group policy). Policy variables act as placeholders. When you make a request to AWS, the placeholder is replaced by a value from the request when the policy is evaluated. As an example, the following policy gives each of the users in the group full programmatic access to a user-specific object (their own "home directory") in S3.`,
    incorrectAnswersExplaination: `IAM policy principal - You can use the Principal element in a policy to specify the principal that is allowed or denied access to a resource (In IAM, a principal is a person or application that can make a request for an action or operation on an AWS resource. The principal is authenticated as the AWS account root user or an IAM entity to make requests to AWS). You cannot use the Principal element in an IAM identity-based policy. You can use it in the trust policies for IAM roles and in resource-based policies. IAM policy condition - The Condition element (or Condition block) lets you specify conditions for when a policy is in effect, like so - "Condition" : { "StringEquals" : { "aws:username" : "johndoe" }}. This can not be used to address the requirements of the given use-case. IAM policy resource - The Resource element specifies the object or objects that the statement covers. You specify a resource using an ARN. This can not be used to address the requirements of the given use-case.`,
  },
  {
    id: 27,
    question:
      "A multi-national company has just moved to AWS Cloud and it has configured forecast-based AWS Budgets alerts for cost management. However, no alerts have been received even though the account and the budgets have been created almost three weeks ago. What could be the issue with the AWS Budgets configuration?",
    correctAnswer:
      "AWS requires approximately 5 weeks of usage data to generate budget forecasts",
    answerOptions: [
      "Budget forecast has been created from an account that does not have enough privileges",
      "CloudWatch could be down and hence alerts are not being sent",
      "Account has to be part of AWS Organizations to receive AWS Budget alerts",
      "AWS requires approximately 5 weeks of usage data to generate budget forecasts",
    ],
    correctAnswerExplanation:
      "AWS Budgets lets customers set custom budgets and receive alerts if their costs or usage exceed (or are forecasted to exceed) their budgeted amount. AWS requires approximately 5 weeks of usage data to generate budget forecasts - AWS requires approximately 5 weeks of usage data to generate budget forecasts. If you set a budget to alert based on a forecasted amount, this budget alert isn't triggered until you have enough historical usage info.",
    incorrectAnswersExplaination:
      "Budget forecast has been created from an account that does not have enough privileges - This is an incorrect statement. If the user account does not have enough privileges, the user will not be able to create the budget at all. CloudWatch could be down and hence alerts are not being sent - CloudWatch is fully managed by AWS, this option has been added as a distractor. Account has to be part of AWS Organizations to receive AWS Budget alerts - This is an incorrect statement. Stand-alone accounts too can create budgets and being part of an Organization is not mandatory to use AWS Budgets.",
  },
  {
    id: 28,
    question:
      "A company has built its technology stack on AWS serverless architecture for managing all its business functions. To expedite development for a new business requirement, the company is looking at using pre-built serverless applications. Which AWS service represents the easiest solution to address this use-case?",
    correctAnswer: "AWS Serverless Application Repository (SAR)",
    answerOptions: [
      "AWS Marketplace",
      "AWS AppSync",
      "AWS Serverless Application Repository (SAR)",
      "AWS Service Catalog",
    ],
    correctAnswerExplanation:
      "AWS Serverless Application Repository (SAR) - The AWS Serverless Application Repository is a managed repository for serverless applications. It enables teams, organizations, and individual developers to store and share reusable applications, and easily assemble and deploy serverless architectures in powerful new ways. Using the Serverless Application Repository, you don't need to clone, build, package, or publish source code to AWS before deploying it. Instead, you can use pre-built applications from the Serverless Application Repository in your serverless architectures, helping you and your teams reduce duplicated work, ensure organizational best practices, and get to market faster. Integration with AWS Identity and Access Management (IAM) provides resource-level control of each application, enabling you to publicly share applications with everyone or privately share them with specific AWS accounts.",
    incorrectAnswersExplaination:
      "AWS Marketplace - The AWS Marketplace enables qualified partners to market and sell their software to AWS Customers. AWS Marketplace is an online software store that helps customers find, buy, and immediately start using the software and services that run on AWS. AWS Marketplace is designed for Independent Software Vendors (ISVs), Value-Added Resellers (VARs), and Systems Integrators (SIs) who have software products they want to offer to customers in the cloud. AWS AppSync - AWS AppSync is a fully managed service that makes it easy to develop GraphQL APIs by handling the heavy lifting of securely connecting to data sources like AWS DynamoDB, Lambda, and more. Organizations choose to build APIs with GraphQL because it helps them develop applications faster, by giving front-end developers the ability to query multiple databases, microservices, and APIs with a single GraphQL endpoint. AWS Service Catalog - AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS. These IT services can include everything from virtual machine images, servers, software, and databases to complete multi-tier application architectures. AWS Service Catalog allows you to centrally manage deployed IT services and your applications, resources, and metadata. This helps you achieve consistent governance and meet your compliance requirements while enabling users to quickly deploy only the approved IT services they need.",
  },
  {
    id: 29,
    question:
      "The Technical Lead of your team has reviewed a CloudFormation YAML template written by a new recruit and specified that an invalid section has been added to the template. Which of the following represents an invalid section of the CloudFormation template?",
    correctAnswer: `'Dependencies' section of the template`,
    answerOptions: [
      `Templates include several major sections. The Resources section is the only required section.`,
      `'Conditions' section of the template`,
      `'Resources' section of the template`,
      `'Parameters' section of the template`,
    ],
    correctAnswerExplanation: `'Dependencies' section of the template - As you can see, there is no section called 'Dependencies' in the template. Although dependencies can be mentioned, there is no section itself for dependencies.`,
    incorrectAnswersExplaination: `'Conditions' section of the template - This optional section includes conditions that control whether certain resources are created or whether certain resource properties are assigned a value during stack creation or update. For example, you could conditionally create a resource that depends on whether the stack is for a production or test environment. 'Resources' section of the template - This is the only required section and specifies the stack resources and their properties, such as an Elastic Compute Cloud instance or an Simple Storage Service bucket. You can refer to resources in the Resources and Outputs sections of the template. 'Parameters' section of the template - This optional section is helpful in passing Values to your template at runtime (when you create or update a stack). You can refer to parameters from the Resources and Outputs sections of the template.`,
  },
  {
    id: 30,
    question:
      "A SaaS company runs a HealthCare web application that is used worldwide by users. There have been requests by mobile developers to expose public APIs for the application-specific functionality. You decide to make the APIs available to mobile developers as product offerings. Which of the following options will allow you to do that?",
    correctAnswer: "Use API Gateway Usage Plans",
    answerOptions: [
      "Use AWS Billing Usage Plans",
      "Use CloudFront Usage Plans",
      "Use AWS Lambda Custom Authorizers",
      "Use API Gateway Usage Plans",
    ],
    correctAnswerExplanation:
      "API Gateway is an AWS service for creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs at any scale. API developers can create APIs that access AWS or other web services, as well as data stored in the AWS Cloud.",
    incorrectAnswersExplaination:
      "Use AWS Billing Usage Plans - AWS Billing and Cost Management is the service that you use to pay your AWS bill, monitor your usage, and analyze and control your costs. There is no such thing as AWS Billing Usage Plans. You cannot use AWS Billing to use public APIs for the application. Use CloudFront Usage Plans - CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment. There is no such thing as CloudFront Usage Plans. You cannot use CloudFront to use public APIs for the application. Use AWS Lambda Custom Authorizers - Lambda is a separate service than Gateway API, therefore, it cannot be used to determine the API usage limits.",
  },
  {
    id: 31,
    question:
      "A development team wants to deploy an AWS Lambda function that requires significant CPU utilization. Which of the following would you suggest for reducing the average runtime of the function?",
    correctAnswer:
      "Deploy the function with its memory allocation set to the maximum amount",
    answerOptions: [
      "Deploy the function with its memory allocation set to the maximum amount",
      "Deploy the function into multiple AWS Regions",
      "Deploy the function using Lambda layers",
      "Deploy the function with its CPU allocation set to the maximum amount",
    ],
    correctAnswerExplanation:
      "Lambda allocates CPU power in proportion to the amount of memory configured. Memory is the amount of memory available to your Lambda function at runtime. You can increase or decrease the memory and CPU power allocated to your function using the Memory (MB) setting. To configure the memory for your function, set a value between 128 MB and 10,240 MB in 1-MB increments. At 1,769 MB, a function has the equivalent of one vCPU (one vCPU-second of credits per second).",
    incorrectAnswersExplaination:
      "Deploy the function into multiple AWS Regions - Deploying the Lambda function to multiple AWS Regions does not increase the compute capacity or CPU utilization capacity of Lambda. So, this option is irrelevant. Deploy the function using Lambda layers - A Lambda layer is a .zip file archive that can contain additional code or data. A layer can contain libraries, a custom runtime, data, or configuration files. Layers promote code sharing and separation of responsibilities so that you can iterate faster on writing business logic. Layers do not increase the computational capacity of Lambda. Deploy the function with its CPU allocation set to the maximum amount - This statement is given as a distractor. CPU allocation is an invalid parameter. As discussed above, the CPU is allocated in proportion to the memory allocated to the function.",
  },
  {
    id: 32,
    question: "NOTE: See test 1, attempt 1.",
    correctAnswer: "",
    answerOptions: ["", "", "", ""],
    correctAnswerExplanation: "",
    incorrectAnswersExplaination: "",
  },
  {
    id: 33,
    question:
      "You have deployed a Java application to an EC2 instance where it uses the X-Ray SDK. When testing from your personal computer, the application sends data to X-Ray but when the application runs from within EC2, the application fails to send data to X-Ray. Which of the following does NOT help with debugging the issue?",
    correctAnswer: "X-Ray sampling",
    answerOptions: [
      "EC2 X-Ray Daemon",
      "EC2 Instance Role",
      "X-Ray sampling",
      "CloudTrail",
    ],
    correctAnswerExplanation:
      "By customizing sampling rules, you can control the amount of data that you record, and modify sampling behavior on the fly without modifying or redeploying your code. Sampling rules tell the X-Ray SDK how many requests to record for a set of criteria. X-Ray SDK applies a sampling algorithm to determine which requests get traced however because our application is failing to send data to X-Ray it does not help in determining the cause of failure.",
    incorrectAnswersExplaination:
      "EC2 X-Ray Daemon - The AWS X-Ray daemon is a software application that listens for traffic on UDP port 2000, gathers raw segment data, and relays it to the AWS X-Ray API. The daemon logs could help with figuring out the problem. EC2 Instance Role - The X-Ray daemon uses the AWS SDK to upload trace data to X-Ray, and it needs AWS credentials with permission to do that. OnEC2, the daemon uses the instance's instance profile role automatically. Eliminates API permission issues (in case the role doesn't have IAM permissions to write data to the X-Ray service). CloudTrail - With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. You can use AWS CloudTrail to answer questions such as - “Who made an API call to modify this resource?”. CloudTrail provides event history of your AWS account activity thereby enabling governance, compliance, operational auditing, and risk auditing of your AWS account. You can check CloudTrail to see if any API call is being denied on X-Ray.",
  },
  {
    id: 34,
    question:
      "A development team wants to build an application using serverless architecture. The team plans to use AWS Lambda functions extensively to achieve this goal. The developers of the team work on different programming languages like Python, .NET and Javascript. The team wants to model the cloud infrastructure using any of these programming languages. Which AWS service/tool should the team use for the given use-case?",
    correctAnswer: "AWS Cloud Development Kit (CDK)",
    answerOptions: [
      "AWS CloudFormation",
      "AWS Cloud Development Kit (CDK)",
      "AWS Serverless Application Model (SAM)",
      "AWS CodeDeploy",
    ],
    correctAnswerExplanation:
      "The AWS Cloud Development Kit (AWS CDK) is an open-source software development framework to define your cloud application resources using familiar programming languages. Provisioning cloud applications can be a challenging process that requires you to perform manual actions, write custom scripts, maintain templates, or learn domain-specific languages. AWS CDK uses the familiarity and expressive power of programming languages such as JavaScript/TypeScript, Python, Java, and .NET for modeling your applications. It provides you with high-level components called constructs that preconfigure cloud resources with proven defaults, so you can build cloud applications without needing to be an expert. AWS CDK provisions your resources in a safe, repeatable manner through AWS CloudFormation. It also enables you to compose and share your own custom constructs that incorporate your organization's requirements, helping you start new projects faster.",
    incorrectAnswersExplaination:
      "AWS CloudFormation - When AWS CDK applications are run, they compile down to fully formed CloudFormation JSON/YAML templates that are then submitted to the CloudFormation service for provisioning. Because the AWS CDK leverages CloudFormation, you still enjoy all the benefits CloudFormation provides such as safe deployment, automatic rollback, and drift detection. But, CloudFormation by itself is not sufficient for the current use case. AWS Serverless Application Model (SAM) - The AWS Serverless Application Repository is a managed repository for serverless applications. It enables teams, organizations, and individual developers to store and share reusable applications, and easily assemble and deploy serverless architectures in powerful new ways. Using the Serverless Application Repository, you don't need to clone, build, package, or publish source code to AWS before deploying it. AWS Serverless Application Model and AWS CDK both abstract AWS infrastructure as code making it easier for you to define your cloud infrastructure. If you prefer defining your serverless infrastructure in concise declarative templates, SAM is the better fit. If you want to define your AWS infrastructure in a familiar programming language, as is the requirement in the current use case, AWS CDK is the right fit. AWS CodeDeploy - AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such asEC2, AWS Fargate, AWS Lambda, and your on-premises servers. AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications. CodeDeploy can be used with AWS CDK for deployments.",
  },
  {
    id: 35,
    question:
      "You created a Java application that uses RDS for its main data storage and ElastiCache for user session storage. The application needs to be deployed using Elastic Beanstalk and every new deployment should allow the application servers to reuse the RDS database. On the other hand, user session data stored in ElastiCache can be re-created for every deployment. Which of the following configurations will allow you to achieve this? (Select two)",
    correctAnswer: [
      "RDS database defined externally and referenced through environment variables",
      "ElastiCache defined in .ebextensions/",
    ],
    answerOptions: [
      "RDS database defined externally and referenced through environment variables",
      "ElastiCache bundled with the application source code",
      "ElastiCache database defined externally and referenced through environment variables",
      "RDS database defined in .ebextensions/",
      "ElastiCache defined in .ebextensions/",
    ],
    correctAnswerExplanation:
      "ElastiCache defined in .ebextensions/ - Any resources created as part of your .ebextensions is part of your Elastic Beanstalk template and will get deleted if the environment is terminated. RDS database defined externally and referenced through environment variables - To decouple your database instance from your environment, you can run a database instance inRDS and configure your application to connect to it on launch. This enables you to connect multiple environments to a database, terminate an environment without affecting the database, and perform seamless updates with blue-green deployments. To allow theEC2 instances in your environment to connect to an outside database, you can configure the environment's Auto Scaling group with an additional security group.",
    incorrectAnswersExplaination:
      "ElastiCache bundled with the application source code - ElastiCache is an AWS service and cannot be bundled with the source code. RDS database defined in .ebextensions/ - The lifetime of the RDS instance gets tied to the lifetime of the Elastic Beanstalk environment, so this option is incorrect. ElastiCache database defined externally and referenced through environment variables - For the given use-case, the client is fine with losing user session data and hence defining it in .ebextensions/ is more appropriate.",
  },
  {
    id: 36,
    question:
      "You are working on creating an application using AWS Cloud Development Kit (CDK). Which of the following represents the correct order of steps to be followed for creating an app using AWS CDK?",
    correctAnswer:
      "Create the app from a template provided by AWS CDK -> Add code to the app to create resources within stacks -> Build the app (optional) -> Synthesize one or more stacks in the app -> Deploy stack(s) to your AWS account",
    answerOptions: [
      "Create the app from a template provided by AWS CloudFormation -> Add code to the app to create resources within stacks -> Build the app (optional) -> Synthesize one or more stacks in the app -> Deploy stack(s) to your AWS account",
      "Create the app from a template provided by AWS CloudFormation -> Add code to the app to create resources within stacks -> Synthesize one or more stacks in the app -> Deploy stack(s) to your AWS account -> Build the app",
      "Create the app from a template provided by AWS CDK -> Add code to the app to create resources within stacks -> Synthesize one or more stacks in the app -> Deploy stack(s) to your AWS account -> Build the app",
      "Create the app from a template provided by AWS CDK -> Add code to the app to create resources within stacks -> Build the app (optional) -> Synthesize one or more stacks in the app -> Deploy stack(s) to your AWS account",
    ],
    correctAnswerExplanation: `The standard AWS CDK development workflow is similar to the workflow you're already familiar with as a developer. There are a few extra steps: Create the app from a template provided by AWS CDK - Each AWS CDK app should be in its own directory, with its own local module dependencies. Create a new directory for your app. Now initialize the app using the cdk init command, specifying the desired template ("app") and programming language. The cdk init command creates a number of files and folders inside the created home directory to help you organize the source code for your AWS CDK app. Add code to the app to create resources within stacks - Add custom code as is needed for your application. Build the app (optional) - In most programming environments, after making changes to your code, you'd build (compile) it. This isn't strictly necessary with the AWS CDK—the Toolkit does it for you so you can't forget. But you can still build manually whenever you want to catch syntax and type errors. Synthesize one or more stacks in the app to create an AWS CloudFormation template - Synthesize one or more stacks in the app to create an AWS CloudFormation template. The synthesis step catches logical errors in defining your AWS resources. If your app contains more than one stack, you'd need to specify which stack(s) to synthesize. Deploy one or more stacks to your AWS account - It is optional (though good practice) to synthesize before deploying. The AWS CDK synthesizes your stack before each deployment. If your code has security implications, you'll see a summary of these and need to confirm them before deployment proceeds. cdk deploy is used to deploy the stack using CloudFormation templates. This command displays progress info as your stack is deployed. When it's done, the command prompt reappears.`,
    incorrectAnswersExplaination:
      "Create the app from a template provided by AWS CloudFormation -> Add code to the app to create resources within stacks -> Build the app (optional) -> Synthesize one or more stacks in the app -> Deploy stack(s) to your AWS account.Create the app from a template provided by AWS CloudFormation -> Add code to the app to create resources within stacks -> Synthesize one or more stacks in the app -> Deploy stack(s) to your AWS account -> Build the app. For both these options, you cannot use AWS CloudFormation to create the app. So these options are incorrect. Create the app from a template provided by AWS CDK -> Add code to the app to create resources within stacks -> Synthesize one or more stacks in the app -> Deploy stack(s) to your AWS account -> Build the app - You cannot have the build step after deployment. So this option is incorrect.",
  },
  {
    id: 37,
    question:
      "Which of the following security credentials can only be created by the AWS Account root user?",
    correctAnswer: "CloudFront Key Pairs",
    answerOptions: [
      "IAM User passwords",
      "EC2 Instance Key Pairs",
      "CloudFront Key Pairs",
      "IAM User Access Keys",
    ],
    correctAnswerExplanation:
      "ForCloudFront, you use key pairs to create signed URLs for private content, such as when you want to distribute restricted content that someone paid for. CloudFront Key Pairs - IAM users can't create CloudFront key pairs. You must log in using root credentials to create key pairs. To create signed URLs or signed cookies, you need a signer. A signer is either a trusted key group that you create in CloudFront, or an AWS account that contains a CloudFront key pair. AWS recommends that you use trusted key groups with signed URLs and signed cookies instead of using CloudFront key pairs.",
    incorrectAnswersExplaination:
      "EC2 Instance Key Pairs - You use key pairs to accessEC2 instances, such as when you use SSH to log in to a Linux instance. These key pairs can be created from the IAM user login and do not need root user access. IAM User Access Keys - Access keys consist of two parts: an access key ID and a secret access key. You use access keys to sign programmatic requests that you make to AWS if you use AWS CLI commands (using the SDKs) or using AWS API operations. IAM users can create their own Access Keys, does not need root access. IAM User passwords - Every IAM user has access to his own credentials and can reset the password whenever they need to.",
  },
  {
    id: 38,
    question:
      "You are a developer in a manufacturing company with several servers on-site. The company decides to move new development to the cloud using serverless technology. You decide to use the AWS Serverless Application Model (AWS SAM) and work with an AWS SAM template file to represent your serverless architecture. Which of the following is NOT a valid serverless resource type?",
    correctAnswer: "AWS::Serverless::UserPool",
    answerOptions: [
      "AWS::Serverless::Function",
      "AWS::Serverless::Api",
      "AWS::Serverless::SimpleTable",
      "AWS::Serverless::UserPool",
    ],
    correctAnswerExplanation:
      "The AWS Serverless Application Model (SAM) is an open-source framework for building serverless applications. It provides shorthand syntax to express functions, APIs, databases, and event source mappings. With just a few lines per resource, you can define the application you want and model it using YAML. SAM supports the following resource types:AWS::Serverless::ApiAWS::Serverless::ApplicationAWS::Serverless::FunctionAWS::Serverless::HttpApiAWS::Serverless::LayerVersionAWS::Serverless::SimpleTableAWS::Serverless::StateMachine UserPool applies to the Cognito service which is used for authentication for mobile app and web. There is no resource named UserPool in the Serverless Application Model.",
    incorrectAnswersExplaination:
      "AWS::Serverless::Function - This resource creates a Lambda function, IAM execution role, and event source mappings that trigger the function.AWS::Serverless::Api - This creates a collection ofAPI Gateway resources and methods that can be invoked through HTTPS endpoints. It is useful for advanced use cases where you want full control and flexibility when you configure your APIs.AWS::Serverless::SimpleTable - This creates a DynamoDB table with a single attribute primary key. It is useful when data only needs to be accessed via a primary key.",
  },
  {
    id: 39,
    question:
      "ECS Fargate container tasks are usually spread across Availability Zones (AZs) and the underlying workloads need persistent cross-AZ shared access to the data volumes configured for the container tasks. Which of the following solutions is the best choice for these workloads?",
    correctAnswer: " EFS volumes",
    answerOptions: [
      "Docker volumes",
      " EFS volumes",
      "AWS Gateway Storage volumes",
      "Bind mounts",
    ],
    correctAnswerExplanation:
      " EFS volumes - EFS volumes provide a simple, scalable, and persistent file storage for use with yourECS tasks. WithEFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files. Your applications can have the storage they need, when they need it.EFS volumes are supported for tasks hosted on Fargate orEC2 instances. You can useEFS file systems withECS to export file system data across your fleet of container instances. That way, your tasks have access to the same persistent storage, no matter the instance on which they land. However, you must configure your container instance AMI to mount theEFS file system before the Docker daemon starts. Also, your task definitions must reference volume mounts on the container instance to use the file system.",
    incorrectAnswersExplaination:
      "Docker volumes - A Docker-managed volume that is created under /var/lib/docker/volumes on the hostEC2 instance. Docker volume drivers (also referred to as plugins) are used to integrate the volumes with external storage systems, such asEBS. The built-in local volume driver or a third-party volume driver can be used. Docker volumes are only supported when running tasks onEC2 instances. Bind mounts - A file or directory on the host, such as anEC2 instance or AWS Fargate, is mounted into a container. Bind mount host volumes are supported for tasks hosted on Fargate orEC2 instances. Bind mounts provide temporary storage, and hence these are a wrong choice for this use case. AWS Storage Gateway volumes - This is an incorrect choice, given only as a distractor.",
  },
  {
    id: 40,
    question:
      "An organization has offices across multiple locations and the technology team has configured an Application Load Balancer across targets in multiple Availability Zones. The team wants to analyze the incoming requests for latencies and the client's IP address patterns. Which feature of the Load Balancer will help collect the required info?",
    correctAnswer: "ALB access logs",
    answerOptions: [
      "ALB access logs",
      "CloudTrail logs",
      "CloudWatch metrics",
      "ALB request tracing",
    ],
    correctAnswerExplanation:
      "ALB access logs - Elastic Load Balancing provides access logs that capture detailed info about requests sent to your load balancer. Each log contains info such as the time the request was received, the client's IP address, latencies, request paths, and server responses. You can use these access logs to analyze traffic patterns and troubleshoot issues. Access logging is an optional feature of Elastic Load Balancing that is disabled by default.",
    incorrectAnswersExplaination:
      "CloudTrail logs - Elastic Load Balancing is integrated with AWS CloudTrail, a service that provides a record of actions taken by a user, role, or an AWS service in Elastic Load Balancing. CloudTrail captures all API calls for Elastic Load Balancing as events. You can use AWS CloudTrail to capture detailed info about the calls made to the Elastic Load Balancing API and store them as log files inS3. You can use these CloudTrail logs to determine which API calls were made, the source IP address where the API call came from, who made the call, when the call was made, and so on. CloudWatch metrics - Elastic Load Balancing publishes data points toCloudWatch for your load balancers and your targets. CloudWatch enables you to retrieve statistics about those data points as an ordered set of time-series data, known as metrics. You can use metrics to verify that your system is performing as expected. This is the right feature if you wish to track a certain metric. ALB request tracing - You can use request tracing to track HTTP requests. The load balancer adds a header with a trace identifier to each request it receives. Request tracing will not help you to analyze latency specific data.",
  },
  {
    id: 41,
    question:
      "The development team at a company creates serverless solutions using AWS Lambda. Functions are invoked by clients via AWS API Gateway which anyone can access. The team lead would like to control access using a 3rd party authorization mechanism. Which of the following options would you recommend for the given use-case?",
    correctAnswer: "Lambda Authorizer",
    answerOptions: [
      "Lambda Authorizer",
      "IAM permissions with sigv4",
      "Cognito User Pools",
      "API Gateway User Pools",
    ],
    correctAnswerExplanation:
      "AnAPI Gateway Lambda authorizer (formerly known as a custom authorizer) is a Lambda function that you provide to control access to your API. A Lambda authorizer uses bearer token authentication strategies, such as OAuth or SAML. Before creating an API Gateway Lambda authorizer, you must first create the AWS Lambda function that implements the logic to authorize and, if necessary, to authenticate the caller.",
    incorrectAnswersExplaination: `"IAM permissions with sigv4" - Signature Version 4 is the process to add authentication info to AWS requests sent by HTTP. You will still need to provide permissions but our requirements have a need for 3rd party authentication which is where Lambda Authorizer comes in to play."Cognito User Pools" - A Cognito user pool is a user directory inCognito. With a user pool, your users can sign in to your web or mobile app throughCognito, or federate through a third-party identity provider (IdP). Whether your users sign-in directly or through a third party, all members of the user pool have a directory profile that you can access through an SDK. This is managed by AWS, therefore, does not meet our requirements. "API Gateway User Pools" - This is a made-up option, added as a distractor.`,
  },
  {
    id: 42,
    question:
      "A Developer has been entrusted with the job of securing certain S3 buckets that are shared by a large team of users. Last time, a bucket policy was changed, the bucket was erroneously available for everyone, outside the organization too. Which feature/service will help the developer identify similar security issues with minimum effort?",
    correctAnswer: "IAM Access Analyzer",
    answerOptions: [
      "Access Advisor feature on IAM console",
      "S3 Object Lock",
      "IAM Access Analyzer",
      "S3 Analytics",
    ],
    correctAnswerExplanation:
      "IAM Access Analyzer - AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such asS3 buckets or IAM roles, that are shared with an external entity. This lets you identify unintended access to your resources and data, which is a security risk. You can set the scope for the analyzer to an organization or an AWS account. This is your zone of trust. The analyzer scans all of the supported resources within your zone of trust. When Access Analyzer finds a policy that allows access to a resource from outside of your zone of trust, it generates an active finding.",
    incorrectAnswersExplaination: `Access Advisor feature on IAM console - To help identify the unused roles, IAM reports the last-used timestamp that represents when a role was last used to make an AWS request. Your security team can use this info to identify, analyze, and then confidently remove unused roles. This helps improve the security posture of your AWS environments. This does not provide info about non-IAM entities such as S3, hence it's not a correct choice here. S3 Object Lock - S3 Object Lock enables you to store objects using a "Write Once Read Many" (WORM) model. S3 Object Lock can help prevent accidental or inappropriate deletion of data, it is not the right choice for the current scenario. S3 Analytics - By usingS3 analytics Storage Class Analysis you can analyze storage access patterns to help you decide when to transition the right data to the right storage class. You cannot use S3 Analytics to identify unintended access to your S3 resources.`,
  },
  {
    id: 43,
    question:
      "Your company has configured AWS Organizations to manage multiple AWS accounts. Within each AWS account, there are many CloudFormation scripts running. Your manager has requested that each script output the account number of the account the script was executed in. Which Pseudo parameter will you use to get this info?",
    correctAnswer: "AWS::AccountId",
    answerOptions: [
      "AWS::Region",
      "AWS::StackName",
      "AWS::AccountId",
      "AWS::NoValue",
    ],
    correctAnswerExplanation:
      "Using CloudFormation, you can create a template that describes all the AWS resources that you want (likeEC2 instances orRDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you. Pseudo parameters are parameters that are predefined by AWS CloudFormation. You do not declare them in your template. Use them the same way as you would a parameter, as the argument for the Ref function. AWS::AccountId returns the AWS account ID of the account in which the stack is being created.",
    incorrectAnswersExplaination: `AWS::NoValue - This removes the corresponding resource property when specified as a return value in the Fn::If intrinsic function.AWS::Region - Returns a string representing the AWS Region in which the encompassing resource is being created, such as us-west-2.AWS::StackName - Returns the name of the stack as specified with the aws cloudformation create-stack command, such as "teststack".`,
  },
  {
    id: 44,
    question: "Which of the following best describes how KMS Encryption works?",
    correctAnswer:
      "KMS stores the CMK, and receives data from the clients, which it encrypts and sends back",
    answerOptions: [
      "KMS receives CMK from the client at every Encrypt call, and encrypts the data with that",
      "KMS stores the CMK, and receives data from the clients, which it encrypts and sends back",
      "KMS sends the CMK to the client, which performs the encryption and then deletes the CMK",
      "KMS generates a new CMK for each Encrypt call and encrypts the data with it",
    ],
    correctAnswerExplanation:
      "A customer master key (CMK) is a logical representation of a master key. The CMK includes metadata, such as the key ID, creation date, description, and key state. The CMK also contains the key material used to encrypt and decrypt data. You can generate CMKs in KMS, in an AWS CloudHSM cluster, or import them from your key management infrastructure. AWS KMS supports symmetric and asymmetric CMKs. A symmetric CMK represents a 256-bit key that is used for encryption and decryption. An asymmetric CMK represents an RSA key pair that is used for encryption and decryption or signing and verification (but not both), or an elliptic curve (ECC) key pair that is used for signing and verification. AWS KMS supports three types of CMKs: customer-managed CMKs, AWS managed CMKs, and AWS owned CMKs.",
    incorrectAnswersExplaination:
      "KMS receives CMK from the client at every encrypt call, and encrypts the data with that - You can import your own CMK (Customer Master Key) but it is done once and then you can encrypt/decrypt as needed. KMS sends the CMK to the client, which performs the encryption and then deletes the CMK - KMS does not send CMK to the client, KMS itself encrypts, and then decrypts the data. KMS generates a new CMK for each Encrypt call and encrypts the data with it - KMS does not generate a new key each time but you can have KMS rotate the keys for you. Best practices discourage extensive reuse of encryption keys so it is good practice to generate new keys.",
  },
  {
    id: 45,
    question:
      "A company wants to improve the performance of its popular API service that offers unauthenticated read access to daily updated statistical info viaAPI Gateway and AWS Lambda. What measures can the company take?",
    correctAnswer: "Enable API caching in API Gateway",
    answerOptions: [
      "Use usage plans and API keys in API Gateway",
      "Enable API caching in API Gateway",
      "Configure API Gateway to use Gateway VPC Endpoint",
      "Configure API Gateway to use Elasticache for Memcached",
    ],
    correctAnswerExplanation:
      "API Gateway provides a few strategies for optimizing your API to improve responsiveness, like response caching and payload compression. You can enable API caching inAPI Gateway to cache your endpoint's responses. With caching, you can reduce the number of calls made to your endpoint and also improve the latency of requests to your API.",
    incorrectAnswersExplaination:
      "Use usage plans and API keys in API Gateway - After you create, test, and deploy your APIs, you can use API Gateway usage plans to make them available as product offerings for your customers. You can configure usage plans and API keys to allow customers to access selected APIs, and begin throttling requests to those APIs based on defined limits and quotas. These can be set at the API, or API method level. This option is incorrect as usage plans and API keys cannot be used to improve the responsiveness of the API. Configure API Gateway to use Elasticache for Memcached - This option has been added as a distractor. Elasticache for Memcached cannot be used with API Gateway to improve the responsiveness of the API for the given use case. You should note that Elasticache for Memcached is a downstream service in the request flow. Configure API Gateway to use Gateway VPC Endpoint - This option has been added as a distractor. Gateway endpoints provide reliable connectivity toS3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC. Gateway endpoints do not enable AWS PrivateLink.",
  },
  {
    id: 46,
    question:
      "A company wants to provide beta access to some developers on its development team for a new version of the company'sAPI Gateway REST API, without causing any disturbance to the existing customers who are using the API via a frontend UI andCognito authentication. The new version has new endpoints and backward-incompatible interface changes, and the company's development team is responsible for its maintenance. Which of the following will satisfy these requirements in the MOST operationally efficient manner?",
    correctAnswer:
      "Create a development stage on the API Gateway API and then have the developers point the endpoints to the development stage",
    answerOptions: [
      "Create a development stage on the API Gateway API and then have the developers point the endpoints to the development stage",
      "Create new API keys on the API Gateway API and then have the developers point the endpoints by passing the new API keys",
      "Create a new API Gateway API that points to the new API application code and then have the developers point the endpoints to the new API",
      "Configure a canary release deployment on the API Gateway API and then have the developers point to the relevant deployment by referencing the stage variable in the endpoint",
    ],
    correctAnswerExplanation:
      "A stage is a logical reference to a lifecycle state of your API (for example, 'dev', 'prod', 'beta', 'v2'). API stages are identified by API ID and stage name. You use a stage to manage and optimize a particular deployment. For example, you can configure stage settings to enable caching, customize request throttling, configure logging, define stage variables, or attach a canary release for testing. After the initial deployment, you can add more stages and associate them with existing deployments. You can use the API Gateway console to create a new stage, or you can choose an existing stage while deploying an API. In general, you can add a new stage to an API deployment before redeploying the API. For the given use case, you can configure a development stage for your API Gateway API and then integrate it with the new version of the backend functionality with new endpoints and backward-incompatible interface changes. The customers can continue to use the existing API.",
    incorrectAnswersExplaination:
      "Configure a canary release deployment on the API Gateway API and then have the developers point to the relevant deployment by referencing the stage variable in the endpoint - An API deployment is a point-in-time snapshot of your API Gateway API. To be available for clients to use, the deployment must be associated with one or more API stages. Canary release is a software development strategy in which a new version of an API (as well as other software) is deployed for testing purposes, and the base version remains deployed as a production release for normal operations on the same stage. In a canary release deployment, total API traffic is separated at random into a production release and a canary release with a pre-configured ratio. Typically, the canary release receives a small percentage of API traffic and the production release takes up the rest. The updated API features are only visible to API traffic through the canary. You can adjust the canary traffic percentage to optimize test coverage or performance. By keeping canary traffic small and the selection random, most users are not adversely affected at any time by potential bugs in the new version, and no single user is adversely affected all the time. This option is incorrect for the given use case as some of the customers would also access the new version of the API. Create new API keys on the API Gateway API and then have the developers point the endpoints by passing the new API keys - AN API key is an alphanumeric string that API Gateway uses to identify an app developer who uses your REST or WebSocket API. This option is a distractor as you cannot selectively provide access to the new version just based on API keys. Create a new API Gateway API that points to the new API application code and then have the developers point the endpoints to the new API - This is an overkill for the given requirement as there is no need to create a completely new API just to provide some developers early access to the beta version.",
  },
  {
    id: 47,
    question:
      "An organization has hosted its EC2 instances in two AZs. AZ1 has two instances and AZ2 has 8 instances. The Elastic Load Balancer managing the instances in the two AZs has cross-zone load balancing enabled in its configuration. What percentage traffic will each of the instances in AZ1 receive?",
    correctAnswer: "10",
    answerOptions: ["15", "25", "10", "20"],
    correctAnswerExplanation:
      "A load balancer accepts incoming traffic from clients and routes requests to its registered targets (such as EC2 instances) in one or more Availability Zones. The nodes for a load balancer distribute requests from clients to registered targets. When cross-zone load balancing is enabled, each load balancer node distributes traffic across the registered targets in all enabled Availability Zones. When cross-zone load balancing is disabled, each load balancer node distributes traffic only across the registered targets in its Availability Zone. With Application Load Balancers, cross-zone load balancing is always enabled. 10 - When cross-zone load balancing is enabled, each of the 10 targets receives 10% of the traffic. This is because each load balancer node can route its 50% of the client traffic to all 10 targets (present in both AZs).",
    incorrectAnswersExplaination:
      "25 - If cross-zone load balancing is disabled, each of the two targets in AZ1 will receive 25% of the traffic. Because the load balancer is only able to send to the targets registered in AZ1 (AZ2 instances are not accessible for load balancer on AZ1) 20 - Invalid option, given only as a distractor. 15 - Invalid option, given only as a distractor.",
  },
  {
    id: 48,
    question:
      "Your company has stored all application secrets in SSM Parameter Store. The audit team has requested to get a report to better understand when and who has issued API calls against SSM Parameter Store. Which of the following options can be used to produce your report?",
    correctAnswer:
      "Use AWS CloudTrail to get a record of actions taken by a user",
    answerOptions: [
      "Use SSM Parameter Store Access Logs in CloudWatch Logs to get a record of actions taken by a user",
      "Use SSM Parameter Store Access Logs in S3 to get a record of actions taken by a user",
      "Use AWS CloudTrail to get a record of actions taken by a user",
      "Use SSM Parameter Store List feature to get a record of actions taken by a user",
    ],
    correctAnswerExplanation:
      "AWS Systems Manager Parameter Store provides secure, hierarchical storage for configuration data management and secrets management. You can store data such as passwords, database strings,Machine Image (AMI) IDs, and license codes as parameter values. You can store values as plain text or encrypted data. AWS CloudTrail provides a record of actions taken by a user, role, or an AWS service in Systems Manager. Using the info collected by AWS CloudTrail, you can determine the request that was made to Systems Manager, the IP address from which the request was made, who made the request, when it was made, and additional details.",
    incorrectAnswersExplaination:
      "Use SSM Parameter Store List feature to get a record of actions taken by a user - This option has been added as a distractor. Use SSM Parameter Store Access Logs in CloudWatch Logs to get a record of actions taken by a user - CloudWatch Logs can be integrated but that will not help determine who issued API calls. Use SSM Parameter Store Access Logs in S3 to get a record of actions taken by a user - S3 Access Logs can be integrated but that will not help determine who issued API calls.",
  },
  {
    id: 49,
    question:
      "You are creating a Cloud Formation template to deploy your CMS application running on an EC2 instance within your AWS account. Since the application will be deployed across multiple regions, you need to create a map of all the possible values for the base AMI. How will you invoke the !FindInMap function to fulfill this use case?",
    correctAnswer: "!FindInMap [ MapName, TopLevelKey, SecondLevelKey ]",
    answerOptions: [
      "!FindInMap [ MapName, TopLevelKey, SecondLevelKey ]",
      "!FindInMap [ MapName, TopLevelKey ]",
      "!FindInMap [ MapName ]",
      "!FindInMap [ MapName, TopLevelKey, SecondLevelKey, ThirdLevelKey ]",
    ],
    correctAnswerExplanation:
      "The intrinsic function Fn::FindInMap returns the value corresponding to keys in a two-level map that is declared in the Mappings section. YAML Syntax for the full function name: Fn::FindInMap: [ MapName, TopLevelKey, SecondLevelKey ] Short form of the above syntax is : !FindInMap [ MapName, TopLevelKey, SecondLevelKey ] Where, MapName - Is the logical name of a mapping declared in the Mappings section that contains the keys and values. TopLevelKey - The top-level key name. Its value is a list of key-value pairs. SecondLevelKey - The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey.",
    incorrectAnswersExplaination:
      "These three options contradict the explanation provided above, hence these options are incorrect.",
  },
  {
    id: 50,
    question:
      "An application is hosted by a 3rd party and exposed at yourapp.3rdparty.com. You would like to have your users access your application using www.mydomain.com, which you own and manage under Route 53. What Route 53 record should you create?",
    correctAnswer: "Create a CNAME record",
    answerOptions: [
      "Create an A record",
      "Create a CNAME record",
      "Create a PTR record",
      "Create an Alias Record",
    ],
    correctAnswerExplanation:
      "A CNAME record maps DNS queries for the name of the current record, such as acme.example.com, to another domain (example.com or example.net) or subdomain (acme.example.com or zenith.example.org). CNAME records can be used to map one domain name to another. Although you should keep in mind that the DNS protocol does not allow you to create a CNAME record for the top node of a DNS namespace, also known as the zone apex. For example, if you register the DNS name example.com, the zone apex is example.com. You cannot create a CNAME record for example.com, but you can create CNAME records for www.example.com, newproduct.example.com, and so on.",
    incorrectAnswersExplaination:
      "Create an A record - Used to point a domain or subdomain to an IP address. 'A record' cannot be used to map one domain name to another. Create a PTR record - A Pointer (PTR) record resolves an IP address to a fully-qualified domain name (FQDN) as an opposite to what A record does. PTR records are also called Reverse DNS records. 'PTR record' cannot be used to map one domain name to another. Create an Alias Record - Alias records let you route traffic to selected AWS resources, such as CloudFront distributions andS3 buckets. They also let you route traffic from one record in a hosted zone to another record. 3rd party websites do not qualify for these as we have no control over those. 'Alias record' cannot be used to map one domain name to another.",
  },
  {
    id: 51,
    question:
      "CodeCommit is a managed version control service that hosts private Git repositories in the AWS cloud. Which of the following credential types is NOT supported by IAM for CodeCommit?",
    correctAnswer: "IAM username and password",
    answerOptions: [
      "AWS Access Keys",
      "IAM username and password",
      "SSH Keys",
      "Git credentials",
    ],
    correctAnswerExplanation:
      " IAM username and password credentials cannot be used to access CodeCommit.",
    incorrectAnswersExplaination:
      "Git credentials - These are IAM -generated user name and password pair you can use to communicate with CodeCommit repositories over HTTPS. SSH Keys - Are locally generated public-private key pair that you can associate with your IAM user to communicate with CodeCommit repositories over SSH. AWS access keys - You can use these keys with the credential helper included with the AWS CLI to communicate with CodeCommit repositories over HTTPS.",
  },
  {
    id: 52,
    question:
      " Simple Queue Service (SQS) has a set of APIs for various actions supported by the service. Which of the following would you identify as correct regarding the CreateQueue API? (Select two)",
    correctAnswer: [
      "The visibility timeout value for the queue is in seconds, which defaults to 30 seconds",
      "You can't change the queue type after you create",
    ],
    answerOptions: [
      "The length of time, in seconds, for which the delivery of all messages in the queue is delayed is configured using MessageRetentionPeriod attribute",
      "The visibility timeout value for the queue is in seconds, which defaults to 30 seconds",
      "You can't change the queue type after you create it",
      "Queue tags are case insensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag",
      "The dead-letter queue of a FIFO queue must also be a FIFO queue.Whereas, the dead-letter queue of a standard queue can be a standard queue or a FIFO queue",
    ],
    correctAnswerExplanation:
      "You can't change the queue type after you create it - You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue.You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. The visibility timeout value for the queue is in seconds, which defaults to 30 seconds - The visibility timeout for the queue is in seconds. Valid values are: An integer from 0 to 43,200 (12 hours), the Default value is 30.",
    incorrectAnswersExplaination:
      "The dead-letter queue of a FIFO queue must also be a FIFO queue. Whereas, the dead-letter queue of a standard queue can be a standard queue or a FIFO queue - The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue. The length of time, in seconds, for which the delivery of all messages in the queue is delayed is configured using MessageRetentionPeriod attribute - The length of time, in seconds, for which the delivery of all messages in the queue is delayed is configured using DelaySeconds attribute. MessageRetentionPeriod attribute controls the length of time, in seconds, for whichSQS retains a message. Queue tags are case insensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag - Queue tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing tag. To be able to tag a queue on creation, you must have the sqs:CreateQueue and sqs:TagQueue permissions.",
  },
  {
    id: 53,
    question:
      "An IT company is configuring Auto Scaling for its EC2 instances spread across different AZs and Regions. Which of the following scenarios are NOT correct about EC2 Auto Scaling? (Select two)",
    correctAnswer: [
      "Auto Scaling groups that span across multiple Regions need to be enabled for all the Regions specified",
      "An Auto Scaling group can contain EC2 instances in only one Availability Zone of a Region",
    ],
    answerOptions: [
      "Auto Scaling groups that span across multiple Regions need to be enabled for all the Regions specified",
      "An Auto Scaling group can contain EC2 instances in only one Availability Zone of a Region",
      "An Auto Scaling group can contain EC2 instances in one or more Availability Zones within the same Region",
      " EC2 Auto Scaling attempts to distribute instances evenly between the Availability Zones that are enabled for your Auto Scaling group",
      "For Auto Scaling groups in a VPC, the EC2 instances are launched in subnets",
    ],
    correctAnswerExplanation:
      "Auto Scaling groups that span across multiple Regions need to be enabled for all the Regions specified - This is not valid for Auto Scaling groups. Auto Scaling groups cannot span across multiple Regions. An Auto Scaling group can contain EC2 instances in only one Availability Zone of a Region - This is not valid for Auto Scaling groups. An Auto Scaling group can contain EC2 instances in one or more Availability Zones within the same Region.",
    incorrectAnswersExplaination:
      "An Auto Scaling group can contain EC2 instances in one or more Availability Zones within the same Region - This is a valid statement. Auto Scaling groups can span across the availability Zones of a Region.EC2 Auto Scaling attempts to distribute instances evenly between the Availability Zones that are enabled for your Auto Scaling group - When one Availability Zone becomes unhealthy or unavailable, Auto Scaling launches new instances in an unaffected Availability Zone. When the unhealthy Availability Zone returns to a healthy state, Auto Scaling automatically redistributes the application instances evenly across all of the designated Availability Zones. For Auto Scaling groups in a VPC, the EC2 instances are launched in subnets - For Auto Scaling groups in a VPC, the EC2 instances are launched in subnets. Customers can select the subnets for your EC2 instances when you create or update the Auto Scaling group.",
  },
  {
    id: 54,
    question:
      "You have been asked to create an AWS Elastic Beanstalk environment to handle deployment for an application with high traffic and high availability needs. You need to deploy the new version using Beanstalk while making sure that performance and availability are not affected. Which of the following is the MOST optimal way to do this while keeping the solution cost-effective?",
    correctAnswer: `Deploy using 'Rolling with additional batch' deployment policy`,
    answerOptions: [
      `Deploy with 'Rolling with additional batch' deployment policy`,
      `Deploy with 'Immutable' deployment policy`,
      `Deploy with 'All at once' deployment policy`,
      `Deploy with 'Rolling' deployment policy`,
    ],
    correctAnswerExplanation:
      "AWS Elastic Beanstalk offers several deployment policies and settings. Choosing the right deployment policy for your application is a tradeoff based on a few considerations and depends on your business needs. Deploy with 'Rolling with additional batch' deployment policy - With this method, Elastic Beanstalk launches an extra batch of instances, then performs a rolling deployment. Launching the extra batch takes time, and ensures that the same bandwidth is retained throughout the deployment. This policy also avoids any reduced availability, although at a cost of an even longer deployment time compared to the Rolling method. Finally, this option is suitable if you must maintain the same bandwidth throughout the deployment.",
    incorrectAnswersExplaination:
      "Deploy with 'Immutable' deployment policy - A slower deployment method, that ensures your new application version is always deployed to new instances, instead of updating existing instances. It also has the additional advantage of a quick and safe rollback in case the deployment fails. With this method, Elastic Beanstalk performs an immutable update to deploy your application. In an immutable update, a second Auto Scaling group is launched in your environment and the new version serves traffic alongside the old version until the new instances pass health checks. Deploy with 'All at once' deployment policy - This is the quickest deployment method. Suitable if you can accept a short loss of service, and if quick deployments are important to you. With this method, Elastic Beanstalk deploys the new application version to each instance. Then, the web proxy or application server might need to restart. As a result, your application might be unavailable to users (or have low availability) for a short time. Deploy with 'Rolling' deployment policy - With this method, your application is deployed to your environment one batch of instances at a time. Most bandwidth is retained throughout the deployment. Avoids downtime and minimizes reduced availability, at a cost of a longer deployment time. Suitable if you can't accept any period of completely lost service. The use case states that the application has high traffic and high availability requirements, so full capacity must be maintained during deployments, hence rolling with additional batch deployment is a better fit than the rolling deployment.",
  },
  {
    id: 55,
    question:
      "A media company has created a video streaming application and it would like their Brazilian users to be served by the company's Brazilian servers. Other users around the globe should not be able to access the servers through DNS queries. Which Route 53 routing policy meets this requirement?",
    correctAnswer: "Geolocation",
    answerOptions: ["Weighted", "Latency", "Geolocation", "Failover"],
    correctAnswerExplanation: `Geolocation routing lets you choose the resources that serve your traffic based on the geographic location of your users, meaning the location that DNS queries originate from. For example, you might want all queries from Europe to be routed to an ELB load balancer in the Frankfurt region. You can also use geolocation routing to restrict distribution of content to only the locations in which you have distribution rights. You can create a default record that handles both queries from IP addresses that aren't mapped to any location and queries that come from locations that you haven't created geolocation records for. If you don't create a default record, Route 53 returns a "no answer" response for queries from those locations.`,
    incorrectAnswersExplaination:
      "Failover - Failover routing lets you route traffic to a resource when the resource is healthy or to a different resource when the first resource is unhealthy. Latency - If your application is hosted in multiple AWS Regions, you can improve performance for your users by serving their requests from the AWS Region that provides the lowest latency. Weighted - Use this policy to route traffic to multiple resources in proportions that you specify.",
  },
  {
    id: 56,
    question:
      "You are a developer working on AWS Lambda functions that are invoked via REST API's using API Gateway. Currently, when a GET request is invoked by the consumer, the entire data-set returned by the Lambda function is visible. Your team lead asked you to format the data response. Which feature of the API Gateway can be used to solve this issue?",
    correctAnswer: "Use API Gateway Mapping Templates",
    answerOptions: [
      "Deploy an interceptor shell script",
      "Use a Lambda custom interceptor",
      "Use an API Gateway stage variable",
      "Use API Gateway Mapping Templates",
    ],
    correctAnswerExplanation:
      "In API Gateway, an API's method request can take a payload in a different format from the corresponding integration request payload, as required in the backend. Similarly, vice versa is also possible. API Gateway lets you use mapping templates to map the payload from a method request to the corresponding integration request and from an integration response to the corresponding method response.",
    incorrectAnswersExplaination:
      "Deploy an interceptor shell script - This option has been added as a distractor.Use an API Gateway stage variable - Stage variables are name-value pairs that you can define as configuration attributes associated with a deployment stage of a REST API. They act like environment variables and can be used in your API setup and mapping templates. This feature is not useful for the current use case.Use a Lambda custom interceptor - This is a made-up option. Lambda cannot intercept the response for the given use-case.",
  },
  {
    id: 57,
    question:
      "A global e-commerce company wants to perform geographic load testing of its order processing API. The company must deploy resources to multiple AWS Regions to support the load testing of the API. How can the company address these requirements without additional application code?",
    correctAnswer:
      "Use an AWS CloudFormation template that defines the load test resources. Leverage the AWS CLI create-stack-set command to create a stack set in the desired Regions",
    answerOptions: [
      "Use an AWS CloudFormation template that defines the load test resources. Develop region-specific Lambda functions to create a stack from the AWS CloudFormation template in each Region when the respective function is invoked",
      "Use an AWS Cloud Development Kit (CDK) ToolKit that defines the load test resources. Leverage the CDK CLI to create a stack from the template in each Region",
      "Use an AWS CloudFormation template that defines the load test resources. Leverage the AWS CLI create-stack-set command to create a stack set in the desired Regions",
      "Use an AWS Organizations template that defines the load test resources across the organization. Leverage the AWS CLI create-stack-set command to create a stack set in the desired Regions",
    ],
    correctAnswerExplanation:
      "AWS CloudFormation StackSets extends the capability of stacks by enabling you to create, update, or delete stacks across multiple accounts and AWS Regions with a single operation. With an admin account, you define and manage an AWS CloudFormation template, and use the template as the basis for provisioning stacks into selected target accounts across specified AWS Regions.",
    incorrectAnswersExplaination:
      "Use an AWS CloudFormation template that defines the load test resources. Develop region-specific Lambda functions to create a stack from the AWS CloudFormation template in each Region when the respective function is invoked - If you do not use a stack set, then you need to define the CloudFormation templates in each region as well as develop lambda functions in each region to create a stack from the corresponding CloudFormation template. This is unnecessary bloat that can be avoided by simply using the CloudFormation StackSets. Use an AWS Cloud Development Kit (CDK) ToolKit that defines the load test resources. Leverage the CDK CLI to create a stack from the template in each Region - AWS CDK is a framework for defining cloud infrastructure in code and provisioning it through AWS CloudFormation. The CDK Toolkit again poses regional limitations and is not the right fit for the given use case. Use an AWS Organizations template that defines the load test resources across the organization. Leverage the AWS CLI create-stack-set command to create a stack set in the desired Regions - This option acts as a distractor. AWS Organizations cannot be used to create templates for provisioning AWS infrastructure. AWS Organizations is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage.",
  },
  {
    id: 58,
    question:
      "When running a Rolling deployment in Elastic Beanstalk environment, only two batches completed the deployment successfully, while rest of the batches failed to deploy the updated version. Following this, the development team terminated the instances from the failed deployment. What will be the status of these failed instances post termination?",
    correctAnswer:
      "Elastic Beanstalk will replace the failed instances with instances with instances running the application version from the most recent successful deployment",
    answerOptions: [
      "Elastic Beanstalk will replace the failed instances with instances with instances running the application version from the most recent successful deployment",
      "Elastic Beanstalk will not replace the failed instances",
      "Elastic Beanstalk will replace the failed instances after the application version to be installed is manually chosen from AWS Console",
      "Elastic Beanstalk will replace the failed instances with instances running the application version from the oldest successful deployment",
    ],
    correctAnswerExplanation:
      "When processing a batch, Elastic Beanstalk detaches all instances in the batch from the load balancer, deploys the new application version, and then reattaches the instances. If you enable connection draining, Elastic Beanstalk drains existing connections from theEC2 instances in each batch before beginning the deployment. If a deployment fails after one or more batches completed successfully, the completed batches run the new version of your application while any pending batches continue to run the old version. You can identify the version running on the instances in your environment on the health page in the console. This page displays the deployment ID of the most recent deployment that was executed on each instance in your environment. If you terminate instances from the failed deployment, Elastic Beanstalk replaces them with instances running the application version from the most recent successful deployment.",
    incorrectAnswersExplaination:
      "These three options contradict the explanation provided above, so these options are incorrect.",
  },
  {
    id: 59,
    question:
      "You chose Elastic Beanstalk to upload your application code and allow it to handle details such as provisioning resources and monitoring. When creating configuration files for AWS Elastic Beanstalk which naming convention should you follow?",
    correctAnswer: ".ebextensions/<mysettings>.config",

    answerOptions: [
      ".ebextensions/<mysettings>.config",
      ".ebextensions_<mysettings>.config",
      ".config/<mysettings>.ebextensions",
      ".config_<mysettings>.ebextensions",
    ],
    correctAnswerExplanation:
      ".ebextensions/<mysettings>.config : You can add AWS Elastic Beanstalk configuration files (.ebextensions) to your web application's source code to configure your environment and customize the AWS resources that it contains. Configuration files are YAML or JSON formatted documents with a .config file extension that you place in a folder named .ebextensions and deploy in your application source bundle.",
    incorrectAnswersExplaination:
      "These three options contradict the explanation provided earlier. So these are incorrect.",
  },
  {
    id: 60,
    question:
      "A development team at a social media company uses AWS Lambda for its serverless stack on AWS Cloud. For a new deployment, the Team Lead wants to send only a certain portion of the traffic to the new Lambda version. In case the deployment goes wrong, the solution should also support the ability to roll back to a previous version of the Lambda function, with MIMINUM downtime for the application. Which of the following options would you recommend to address this use-case?",
    correctAnswer:
      "Use the application to use an alias that points to the current version. Deploy the new version of the code and configure the alias to send 10% of the users to this new version. If the deployment goes wrong, reset the alias to point all traffic to the current version",
    answerOptions: [
      "Use the application to use an alias that points to the current version. Deploy the new version of the code and configure the alias to send 10% of the users to this new version. If the deployment goes wrong, reset the alias to point all traffic to the current version",
      "Use the application to use an alias that points to the current version. Deploy the new version of the code and configure alias to send all users to this new version. If the deployment goes wrong, reset the alias to point to the current version",
      "Use the application to directly deploy the new Lambda version. If the deployment goes wrong, reset the application back to the current version using the version number in the ARN",
      "Use the application to have multiple alias of the Lambda function. Deploy the new version of the code. Configure a new alias that points to the current alias of the Lambda function for handling 10% of the traffic. If the deployment goes wrong, reset the new alias to point all traffic to the most recent working alias of the Lambda function",
    ],
    correctAnswerExplanation:
      "You can use versions to manage the deployment of your AWS Lambda functions. For example, you can publish a new version of a function for beta testing without affecting users of the stable production version. You can change the function code and settings only on the unpublished version of a function. When you publish a version, the code and most of the settings are locked to ensure a consistent experience for users of that version. You can create one or more aliases for your AWS Lambda function. A Lambda alias is like a pointer to a specific Lambda function version. You can use routing configuration on an alias to send a portion of traffic to a Lambda function version. For example, you can reduce the risk of deploying a new version by configuring the alias to send most of the traffic to the existing version, and only a small percentage of traffic to the new version.",
    incorrectAnswersExplaination:
      "Use the application to use an alias that points to the current version. Deploy the new version of the code and configure alias to send all users to this new version. If the deployment goes wrong, reset the alias to point to the current version - In this case, the application uses an alias to send all traffic to the new version which does not meet the requirement of sending only a certain portion of the traffic to the new Lambda version. In addition, if the deployment goes wrong, the application would see a downtime. Hence this option is incorrect. Use the application to directly deploy the new Lambda version. If the deployment goes wrong, reset the application back to the current version using the version number in the ARN - In this case, the application sends all traffic to the new version which does not meet the requirement of sending only a certain portion of the traffic to the new Lambda version. In addition, if the deployment goes wrong, the application would see a downtime. Hence this option is incorrect. Use the application to have multiple alias of the Lambda function. Deploy the new version of the code. Configure a new alias that points to the current alias of the Lambda function for handling 10% of the traffic. If the deployment goes wrong, reset the new alias to point all traffic to the most recent working alias of the Lambda function - This option has been added as a distractor. The alias for a Lambda function can only point to a Lambda function version. It cannot point to another alias.",
  },
  {
    id: 61,
    question:
      "A startup with newly created AWS account is testing different EC2 instances. They have used Burstable performance instance - T2.micro - for 35 seconds and stopped the instance. At the end of the month, what is the instance usage duration that the company is charged for?",
    correctAnswer: "0 seconds",
    answerOptions: ["0 seconds", "60 seconds", "35 seconds", "30 seconds"],
    correctAnswerExplanation:
      "Burstable performance instances, which are T3, T3a, and T2 instances, are designed to provide a baseline level of CPU performance with the ability to burst to a higher level when required by your workload. Burstable performance instances are the only instance types that use credits for CPU usage. 0 seconds - AWS states that, if your AWS account is less than 12 months old, you can use a t2.micro instance for free within certain usage limits.",
    incorrectAnswersExplaination:
      "These three options contradict the explanation provided earlier, so these are incorrect.",
  },
  {
    id: 62,
    question:
      "A company uses Elastic Beanstalk to manage its IT infrastructure on AWS Cloud and it would like to deploy the new application version to the EC2 instances. When the deployment is executed, some instances should serve requests with the old application version, while other instances should serve requests using the new application version until the deployment is completed. Which deployment meets this requirement without incurring additional costs?",
    correctAnswer: "Rolling",
    answerOptions: [
      "Immutable",
      "Rolling",
      "All at once",
      "Rolling with additional batches",
    ],
    correctAnswerExplanation:
      "With Elastic Beanstalk, you can quickly deploy and manage applications in the AWS Cloud without having to learn about the infrastructure that runs those applications. Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring. The rolling deployment policy deploys the new version in batches. Each batch is taken out of service during the deployment phase, reducing your environment's capacity by the number of instances in a batch. The cost remains the same as the number of EC2 instances does not increase. This policy avoids downtime and minimizes reduced availability, at a cost of a longer deployment time.",
    incorrectAnswersExplaination:
      "Immutable - The 'Immutable' deployment policy ensures that your new application version is always deployed to new instances, instead of updating existing instances. It also has the additional advantage of a quick and safe rollback in case the deployment fails. All at once - This policy deploys the new version to all instances simultaneously. Although 'All at once' is the quickest deployment method, but the application may become unavailable to users (or have low availability) for a short time. Rolling with additional batches - This policy deploys the new version in batches, but first launches a new batch of instances to ensure full capacity during the deployment process. This policy avoids any reduced availability, at a cost of an even longer deployment time compared to the Rolling method. Suitable if you must maintain the same bandwidth throughout the deployment. These increase the costs as you're adding extra instances during the deployment.",
  },
  {
    id: 63,
    question:
      "You're a developer working on a large scale order processing application. After developing the features, you commit your code to AWS CodeCommit and begin building the project with AWS CodeBuild before it gets deployed to the server. The build is taking too long and the error points to an issue resolving dependencies from a third-party. You would like to prevent a build running this long in the future for similar underlying reasons. Which of the following options represents the best solution to address this use-case?",
    correctAnswer: "Enable CodeBuild timeouts",
    answerOptions: [
      "Use AWS CloudWatch Events",
      "Enable CodeBuild timeouts",
      "Use VPC Flow Logs",
      "Use AWS Lambda",
    ],
    correctAnswerExplanation:
      "A build represents a set of actions performed by AWS CodeBuild to create output artifacts (for example, a JAR file) based on a set of input artifacts (for example, a collection of Java class files). The following rules apply when you run multiple builds: When possible, builds run concurrently. The maximum number of concurrently running builds can vary. Builds are queued if the number of concurrently running builds reaches its limit. The maximum number of builds in a queue is five times the concurrent build limit. A build in a queue that does not start after the number of minutes specified in its time out value is removed from the queue. The default timeout value is eight hours. You can override the build queue timeout with a value between five minutes and eight hours when you run your build. By setting the timeout configuration, the build process will automatically terminate post the expiry of the configured timeout.",
    incorrectAnswersExplaination:
      "Use AWS Lambda - AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume. Lambda cannot be used to impact the code build process. Use AWS CloudWatch Events -CloudWatch allows you to monitor AWS cloud resources and the applications you run on AWS. Metrics are provided automatically for a number of AWS products and services. CloudWatch is good for monitoring and viewing logs. CloudWatch cannot be used to impact the code build process. Use VPC Flow Logs - VPC Flow Logs is a feature that enables you to capture info about the IP traffic going to and from network interfaces in your VPC but not for code compiling configuration. VPC Flow Logs cannot be used to impact the code build process.",
  },
  {
    id: 64,
    question:
      "To enable HTTPS connections for his web application deployed on the AWS Cloud, a developer is in the process of creating server certificate. Which AWS entities can be used to deploy SSL/TLS server certificates? (Select two)",
    correctAnswer: ["IAM", "AWS Certificate Manager"],
    answerOptions: [
      "IAM",
      "AWS CloudFormation",
      "AWS Secrets Manager",
      "AWS Certificate Manager",
      "AWS Systems Manager",
    ],
    correctAnswerExplanation:
      "AWS Certificate Manager - AWS Certificate Manager (ACM) is the preferred tool to provision, manage, and deploy server certificates. With ACM you can request a certificate or deploy an existing ACM or external certificate to AWS resources. Certificates provided by ACM are free and automatically renew. In a supported Region, you can use ACM to manage server certificates from the console or programmatically. IAM - IAM is used as a certificate manager only when you must support HTTPS connections in a Region that is not supported by ACM. IAM securely encrypts your private keys and stores the encrypted version in IAM SSL certificate storage. IAM supports deploying server certificates in all Regions, but you must obtain your certificate from an external provider for use with AWS. You cannot upload an ACM certificate to IAM. Additionally, you cannot manage your certificates from the IAM Console.",
    incorrectAnswersExplaination:
      "AWS Secrets Manager - AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. Users and applications retrieve secrets with a call to Secrets Manager APIs, eliminating the need to hardcode sensitive info in plain text. It cannot be used to discover and protect your sensitive data in AWS. AWS Systems Manager - AWS Systems Manager gives you visibility and control of your infrastructure on AWS. Systems Manager provides a unified user interface so you can view operational data from multiple AWS services and allows you to automate operational tasks such as running commands, managing patches, and configuring servers across AWS Cloud as well as on-premises infrastructure. AWS CloudFormation - AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all Regions and accounts. Think infrastructure as code; think CloudFormation. You cannot use CloudFormation for running commands or managing patches on servers.",
  },
  {
    id: 65,
    question:
      "A dev team has configured inbound traffic for the relevant ports in both the Security Group of the EC2 instance as well as the Network Access Control List (NACL) of the subnet for the EC2 instance. The team is, however, unable to connect to the service running on theEC2 instance. Which of the following will you recommend to fix this issue?",
    answer:
      "Security Groups are stateful, so allowing inbound traffic to the necessary ports enables the connection.Network ACLs are stateless, so you must allow both inbound and outbound traffic",
    options: [
      "Security Groups are stateful, so allowing inbound traffic to the necessary ports enables the connection.Network ACLs are stateless, so you must allow both inbound and outbound traffic",
      "Network ACLs are stateful, so allowing inbound traffic to the necessary ports enables the connection.Security Groups are stateless, so you must allow both inbound and outbound traffic",
      "IAM Role defined in the Security Group is different from the IAM Role that is given access in the Network ACLs",
      "Rules associated with Network ACLs should never be modified from the command line.An attempt to modify rules from the command line blocks the rule and results in an erratic behavior",
    ],
    correctAnswerExplanation:
      "Security groups are stateful, so allowing inbound traffic to the necessary ports enables the connection. Network ACLs are stateless, so you must allow both inbound and outbound traffic. To enable the connection to a service running on an instance, the associated network ACL must allow both inbound traffic on the port that the service is listening on as well as allow outbound traffic from ephemeral ports. When a client connects to a server, a random port from the ephemeral port range (1024-65535) becomes the client's source port.The designated ephemeral port then becomes the destination port for return traffic from the service, so outbound traffic from the ephemeral port must be allowed in the network ACL. By default, network ACLs allow all inbound and outbound traffic. If your network ACL is more restrictive, then you need to explicitly allow traffic from the ephemeral port range. If you accept traffic from the internet, then you also must establish a route through an internet gateway. If you accept traffic over VPN or AWS Direct Connect, then you must establish a route through a virtual private gateway.",
    incorrectAnswersExplaination:
      "Network ACLs are stateful, so allowing inbound traffic to the necessary ports enables the connection. Security Groups are stateless, so you must allow both inbound and outbound traffic - This is incorrect as already discussed. IAM Role defined in the Security Group is different from the IAM Role that is given access in the Network ACLs - This is a made-up option and just added as a distractor. Rules associated with Network ACLs should never be modified from the command line. An attempt to modify rules from the command line blocks the rule and results in an erratic behavior - This option is a distractor. AWS does not support modifying rules of Network ACLs from the command line tool.",
  },
];
