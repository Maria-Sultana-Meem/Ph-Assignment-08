export const loadInstallList=()=>{

  try {
    const data = localStorage.getItem('installList')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }

}

export const updateInstallList = install => {
  const installList = loadInstallList()

  try {
    const isDuplicate = installList.some(i => i.id === install.id)
    if (isDuplicate) {
        alert("already installed")
        return
    }
    const updatedinstallList = [...installList, install]
    localStorage.setItem('installList', JSON.stringify(updatedinstallList))
  } catch (err) {
    console.log(err)
  }
}

export const removeFromInstallList = id => {
  const installList = loadInstallList()
  try {
    const updatedinstallList = installList.filter(i => i.id !== id)
    localStorage.setItem('installList', JSON.stringify(updatedinstallList))
  } catch (err) {
    console.log(err)
  }
}