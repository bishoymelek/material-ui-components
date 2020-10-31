import React, { useState } from 'react';
import classNames from 'classnames';
import './style.css';

function FAQ({
  children,
  defaultOpen = [0, 0],
  open: openFromProps,
  onToggle: onToggleFromProps = () => {},
}) {
  const isControlled = () => (openFromProps ? true : false);
  const [open, setIsOpen] = useState(defaultOpen);
  const getOpen = () => (isControlled() ? openFromProps : open);
  const isOpen = (index) => {
    return getOpen().includes(index) ? true : false;
  };
  const onToggle = (index) => {
    if (isControlled()) {
      onToggleFromProps(index);
    } else {
      if (getOpen().includes(index)) {
        setIsOpen(getOpen().filter((item) => item !== index));
      } else {
        setIsOpen([...getOpen(), index]);
      }

      onToggleFromProps(index);
    }
  };
  return (
    <div className="accrodion-grp faq-accrodion">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isOpen: isOpen(index),
          onToggle: () => onToggle(index),
        });
      })}
    </div>
  );
}

function Question({ children, isOpen, answerId, onToggle }) {
  return (
    <div className="accrodion-title">
      <h4
        className="FAQ__question"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        {children(isOpen, onToggle)}
      </h4>
    </div>
  );
}

function Answer({ children, id, isOpen }) {
  const mergedClassname = classNames('FAQ__answer', {
    'FAQ__answer--hidden': !isOpen,
  });
  return (
    <div className="accrodion-content">
      <div className="inner">
        <p className={mergedClassname} id={id}>
          {children}
        </p>
      </div>
    </div>
  );
}

function QAItem({ children, isOpen, onToggle }) {
  return (
    <div className="accrodion active">
      <div className="accrodion-inner">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            key: index,
            isOpen: isOpen,
            onToggle: onToggle,
          });
        })}
      </div>
    </div>
  );
}

FAQ.QAItem = QAItem;
FAQ.Question = Question;
FAQ.Answer = Answer;

export default FAQ;
