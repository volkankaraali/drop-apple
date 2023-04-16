const getRandomDropApples = (branches) => {

  let totalDroppedApple = 0;
  let branchesLeftOnTheTree = [];


  branches.map(item => {
    // generate random boolean value
    const isDropped = Math.random() >= 0.5;

    if (isDropped) totalDroppedApple += item.apple;
    else branchesLeftOnTheTree.push(item)
  })

  return {
    branchesLeftOnTheTree,
    totalDroppedApple
  };
}

export default getRandomDropApples;