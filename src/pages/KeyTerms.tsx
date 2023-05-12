// TO-DO
// If Mouse Hover, Card Flips
// Tutorial https://www.youtube.com/watch?v=YaioUnMw0mo&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=25

// TO-DO
// Sort by Field:  Analytics, Application Integration, Compute, Containers, Database, Developer Tools, Management and Governance, Networking and Content Delivery, Security Identity and Compliance, Storage
// See In-scope AWS services and features at https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf

import "../assets/styles.css";

interface KeyTerm {
  name: string;
  type: string;
  definition: string;
  youtube: string[];
}

interface KeyTermsProps {
  terms: KeyTerm[];
}

function KeyTerms({ terms }: KeyTermsProps) {
  return (
    <div>
      <h1>Key Terms</h1>
      <div>
        {terms.map((term) => (
          <div className="keyterm-spacer">
            <div key={term.name}>{term.name}</div>
            <div>{term.type}</div>
            <div>{term.definition}</div>
            <div>
              {term.youtube.map((link, index) => (
                <div>
                  <a key={link} href={link}>
                    YouTube Video {index+1}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyTerms;
