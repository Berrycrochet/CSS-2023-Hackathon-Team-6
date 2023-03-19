import React from 'react'

const TypeMuscle = ({typeMuscle}) => {
  return (
    <div>
        {typeMuscle.map((muscle, index) => {
            return <p key={index}>{muscle.name}</p>
        })}
    </div>
  )
}

export default TypeMuscle