const user=(props)=>{
    const [name,setname]= useState('');
    const add = () => {
        // count++;
        setname(name);
        // console.log("count=>", count);
      };
      const input=(e)=>{
        setname(e.target.value)
      }
    return(
        <div>
            name:{props.name}
        </div>
    )
}

export default user 