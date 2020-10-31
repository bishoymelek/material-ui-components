import React from 'react';
import FAQ from './FaqComponent';

function Faq(props) {
  const { faqList } = props;
  return (
    <section className="faq-one">
      <img
        src="/assets/images/background/faq-one-bg.png"
        alt="Awesome Image"
        className="faq-one__bg"
      />
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Want to Ask <span>Something</span> <br /> From Us?
          </h2>
        </div>
        <FAQ>
          {faqList.length &&
            faqList.map((oneFaq, i) => (
              <FAQ.QAItem key={i}>
                <FAQ.Question answerId="q1">
                  {(isOpen, onToggle) => {
                    return <span>{oneFaq.question}</span>;
                  }}
                </FAQ.Question>
                <FAQ.Answer id="q1"> {oneFaq.answer} </FAQ.Answer>
              </FAQ.QAItem>
            ))}
        </FAQ>
      </div>
    </section>
  );
}

export default Faq;
