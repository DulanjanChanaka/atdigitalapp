import React, { useState } from 'react';

const Bottom = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (topic) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [topic]: !prevExpanded[topic],
    }));
  };

  return (
    <div className="p-4 rounded-md w-[334px] xl:w-[846px] xl:mb-[80px] lg:w-[846px] lg:mb-[80px] md:w-[686px] md:mb-[80px] ">
      <h2 className="text-[27px] font-semibold  mb-4 text-center text-[#6B3CC9]">Frequently asked questions</h2>
      <ul className="space-y-3">
        <li>
          <button
            onClick={() => toggleExpand('topic1')}
            className="flex items-center justify-between bg-[#FAF8FF] px-4 py-2 rounded-md w-full"
          >
            <span className={expanded['topic1'] ? 'text-purple-600' : 'font-medium'}>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</span>
            <span>{expanded['topic1'] ? '-' : '+'}</span>
          </button>
          {expanded['topic1'] && (
            <p className=" p-4 rounded-md text-[#6F6C90] bg-[#FAF8FF]">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
            </p>
          )}
        </li>
        <li>
          <button
            onClick={() => toggleExpand('topic2')}
            className="flex items-center justify-between bg-[#FAF8FF] px-4 py-2 rounded-md w-full"
          >
            <span className={expanded['topic2'] ? 'text-purple-600' : 'font-medium'}>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</span>
            <span>{expanded['topic2'] ? '-' : '+'}</span>
          </button>
          {expanded['topic2'] && (
            <p className=" p-4 rounded-md text-[#6F6C90] bg-[#FAF8FF]">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
            </p>
          )}
        </li>
        <li>
          <button
            onClick={() => toggleExpand('topic3')}
            className="flex items-center justify-between bg-[#FAF8FF] px-4 py-2 rounded-md w-full"
          >
            <span className={expanded['topic3'] ? 'text-purple-600' : 'font-medium'}>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</span>
            <span>{expanded['topic3'] ? '-' : '+'}</span>
          </button>
          {expanded['topic3'] && (
            <p className=" p-4 rounded-md text-[#6F6C90] bg-[#FAF8FF]">
             Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
            </p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Bottom;
