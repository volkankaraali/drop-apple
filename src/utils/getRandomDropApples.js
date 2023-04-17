const getRandomDropApples = (branches) => {

  let totalDroppedApple = 0;
  let droppedBranches = [];


  branches.map(item => {
    // generate random boolean value
    const isDropped = Math.random() >= 0.5;

    if (isDropped) {
      totalDroppedApple += item.apple
      droppedBranches.push(item)
    };
  })

  console.log(droppedBranches)

  return {
    droppedBranches,
    totalDroppedApple
  };
}

export default getRandomDropApples;