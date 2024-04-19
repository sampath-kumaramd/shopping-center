import { TermsOfUse, TermsOfUses } from '@/bin/terms-of-use';
import { Custombreadcrumb } from '@/components/bread-crumb'
import React from 'react'


function TermsOfUsePage() {
  return (
    <div className=' h-auto lg:mx-32 md:mx-16 mx-8 py-12'>
      <Custombreadcrumb title_1="Termos de uso" href_1="/terms-of-use" />
      <div className=' mt-8 lg:px-28 md:px-16 px-8'>
        {TermsOfUses.map((terms: TermsOfUse) => {
          const TermsComponent = () => (
            <div key={terms.id} className="py-4">
              <h2 className="text-xl font-bold">{terms.title}</h2>
              <p className="text-gray-800 ">{terms.content}</p>
            </div>
          );
          TermsComponent.displayName = `TermsComponent${terms.id}`;
          return <TermsComponent key={terms.id} />;
        })}
      </div>
    </div>
  )
}

export default TermsOfUsePage