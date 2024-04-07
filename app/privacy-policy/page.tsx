import { Custombreadcrumb } from '@/components/bread-crumb'
import React from 'react'
import  { PrivacyPolicies, PrivacyPolicy } from '@/bin/privacy-policy'

function PrivacyPolicyPage() {
  return (
    <div className=' h-auto mx-32 py-12'>
      <Custombreadcrumb title_1="Política de Privacidade" href_1="/privacy-policy" />
      <div className=' mt-8 px-28'>

      {PrivacyPolicies.map((policy:PrivacyPolicy) => {
        const PolicyComponent = () => (
          <div key={policy.id} className="py-4">
            <h2 className="text-xl font-bold">{policy.title}</h2>
            <p className="text-gray-800 ">{policy.content}</p>
          </div>
        );
        PolicyComponent.displayName = `PolicyComponent${policy.id}`;
        return <PolicyComponent key={policy.id} />;
      })}
      </div>
    </div>
  )
}

export default PrivacyPolicyPage