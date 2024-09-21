import React, { useState } from 'react';
import Email from './Component/Centent/Email'
import Content from './Content';

function Parent() {
  const [tabData, setTabData] = useState({ tabType: "Welcome" });

  return (
    <div>
      {/* Pass tabData and setTabData to children */}
      <Email tabData={tabData} setTabData={setTabData} />
      <Content tabData={tabData} />
    </div>
  );
}

export default Parent;