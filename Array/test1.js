

//let nums=[1,1,2]
//nums.splice(4,2)
//console.log(nums)


// const removeduplicate=(nums)=>{

//     for(let i=0;i<nums.length;i++)
//         {
//             for(let j=i+1;j<nums.length;j++)
//                 {
//                    while(nums[i]===nums[j])
//                         nums.splice(i,1)
                        
//                 }
//         }

//         return nums
// }

// console.log(removeduplicate(nums))

let nums=[1,2,3,4,5]

let val=2

const RemoveElement=(nums,val)=>{

   nums= nums.filter(item=>item!=val)
    return nums.length+1
  
}

RemoveElement([3,3],3)

