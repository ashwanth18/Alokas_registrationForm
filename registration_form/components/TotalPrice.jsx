import React from 'react'
import { useRecoilValue } from 'recoil'
import { subjectState } from '../atoms/subjectAtom'

function TotalPrice() {
    const totalPrices = useRecoilValue(subjectState);
  return (
    <div>
        {`"the cost is ${totalPrices}`}
    </div>
  )
}

export default TotalPrice