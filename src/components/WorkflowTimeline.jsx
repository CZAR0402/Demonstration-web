import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

function WorkflowTimeline({ workflow }) {
  if (!workflow || workflow.length === 0) return null;

  return (
    <div className="workflow-timeline-wrapper">
      <div className="workflow-header-title">
        <h3>How It Works</h3>
        <p>Step-by-step operational workflow diagram</p>
      </div>

      <div className="workflow-nodes-container">
        {workflow.map((item, index) => {
          const stepNum = item.step < 10 ? `0${item.step}` : `${item.step}`;
          const isLast = index === workflow.length - 1;

          return (
            <React.Fragment key={index}>
              <div className="workflow-node-card">
                <div className="node-step-badge">{stepNum}</div>
                <div className="node-content">
                  <h4 className="node-title">{item.title}</h4>
                  <p className="node-description">{item.description}</p>
                </div>
              </div>

              {!isLast && (
                <div className="workflow-connector">
                  <ArrowRight size={20} className="connector-arrow-desktop" />
                  <div className="connector-line-mobile"></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default WorkflowTimeline;
