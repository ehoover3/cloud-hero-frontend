export const questions = [
    {
      question: "A gaming company wants to store information about all the games that the company has released. Each game has a name, version number, and category (such as sports, puzzles, strategy, etc). The game information also can include additional properties about the supported platforms and technical specifications. This additional information is inconsistent across games.  You have been hired as an AWS Certified Developer Associate to build a solution that addresses the following use cases:  For a given name and version number, get all details about the game that has that name and version number.  For a given name, get all details about all games that have that name.  For a given category, get all details about all games in that category.  What will you recommend as the most efficient solution?",
      answer: "Set up an Amazon DynamoDB table with a primary key that consists of the name as the partition key and the version number as the sort key.  Create a global secondary index that has the category as the partition key and the name as the sort key",
      options: ["Set up an Amazon DynamoDB table with a primary key that consists of the category as the partition key and hte version number as the sort key.  Create a global secondary index that has the name as the partition key", "Set up an Amazon RDS MySQL instance having games table that contains columns for name, version number, and category.  Configure the name column as the primary key", "Permanently store the name, version number, and category information about the games in an Amazon Elasticache for Memecached instance", "Set up an Amazon DynamoDB table with a primary key that consists of the name as the partition key and the version number as the sort key.  Create a global secondary index that has the category as the partition key and the name as the sort key"],
      explanation: "When you create a DynamoDB table, in addition to the table name, you must specify the primary key of the table. The primary key uniquely identifies each item in the table, so that no two items can have the same key. You can create one or more secondary indexes on a table. A secondary index lets you query the data in the table using an alternate key, in addition to queries against the primary key. DynamoDB doesn't require that you use indexes, but they give your applications more flexibility when querying your data.  You should note that a global secondary index (GSI) contains a selection of attributes from the base table, but they are organized by a primary key that is different from that of the table. The Global secondary indexes allow you to perform queries on attributes that are not part of the table's primary key."
    },
    {
      question: "As an AWS Certified Developer Associate, you have configured the AWS CLI on your workstation. Your default region is us-east-1 and your IAM user has permissions to operate commands on services such as EC2, S3 and RDS in any region. You would like to execute a command to stop an EC2 instance in the us-east-2 region.  What of the following is the MOST optimal solution to address this use-case?",
      answer: "Use the --region parameter",
      options: ["You need to override the default region by using aws configure", "You should create a new IAM user just for that other region", "Use the --region parameter", "Use boto3 dependency injection"],
      explanation: "If the region parameter is not set, then the CLI command is executed against the default AWS region."
    },
    {
      question: "You are a developer for a web application written in .NET which uses the AWS SDK. You need to implement an authentication mechanism that returns a JWT (JSON Web Token).  Which AWS service will help you with token handling and management?",
      answer: "Cognito User Pools",
      options: ["Cognito Sync", "API Gateway", "Cognito Identity Pools", "Cognito User Pools"],
      explanation: "After successful authentication, Amazon Cognito returns user pool tokens to your app. You can use the tokens to grant your users access to your own server-side resources, or to the Amazon API Gateway.  Amazon Cognito user pools implement ID, access, and refresh tokens as defined by the OpenID Connect (OIDC) open standard.  The ID token is a JSON Web Token (JWT) that contains claims about the identity of the authenticated user such as name, email, and phone_number. You can use this identity information inside your application. The ID token can also be used to authenticate users against your resource servers or server applications."
    },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
    
    // {
    //   question: "",
    //   answer: "",
    //   options: ["", "", "", ""],
    //   explanation: ""
    // },
  ];