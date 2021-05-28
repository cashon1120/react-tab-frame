class TabHistory {
  state: string[]

  constructor(){
    window.addEventListener('popstate', this.onPopStateChange)
    this.state = []
  }

  pushState(path: string){
    if(this.state.includes(path)){
      this.deleteState(path)
    }
    this.state.push(path)
    console.log(this.state)
  }

  onPopStateChange = () => {
    window.history.pushState(null, '', this.getLastState())
    this.getState()
  }

  getLastState = () => {
    const {length} = this.state
    this.state.splice(length - 1, 1)
    return this.state[this.state.length - 1]
  }

  deleteState = (path: string) => {
    for(let i = 0; i < this.state.length; i+=1){
      if(this.state[i] === path){
        this.state.splice(i, 1)
        break
      }
    }
  }

  getState(){
    console.log(this.state)
    return this.state
  }

  back(){
    window.history.pushState(null, '', this.getLastState())
  }
}

if(!window.tabHistory){
  window.tabHistory =  new TabHistory()
}
export default window.tabHistory
