// generate random branches with apples

const getBranches = () => {
  const branches = [];
  const minNumber = 5;
  const maxNumber = 11;

  // generate random branches number between minNumber and maxNumber
  const randomBranchesNumberOnTree = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

  while (branches.length < randomBranchesNumberOnTree) {
    // generate random index for branch on tree. there are 11 branches on the tree.
    const index = Math.floor(Math.random() * 11) + 1;
    const apples = Math.floor(Math.random() * 2) + 1;

    const isExistIndexInBranches = branches.find(item => item.branch === index)
    if (!isExistIndexInBranches) {
      branches.push({ branch: index, apple: apples })
    }
  }

  return branches

}

export default getBranches;