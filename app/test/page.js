import React from "react";

export default function page() {
    
  
  return (
    
  <>
  <div className="grid grid-cols-[5,3,2] gap-4">
    <div className="bg-red-500 col-span-5">
      <p>This is a 5x sized div</p>
    </div>
    <div className="bg-green-500 col-span-3">
      <p>This is a 3x sized div</p>
    </div>
    <div className="bg-blue-500 col-span-2">
      <p>This is a 2x sized div</p>
    </div>
  </div>

  </>
    
  )
}
