import UserProfil from "./components/userProfil"

function App() {
      const userList = [
          {id : 1 ,prenom:"Marieme",age:18,isOnline:false},
          {id : 2 ,prenom:"rame",age:40,isOnline:true},
          {id : 3 ,prenom:"adja",age:10,isOnline:false},
          {id : 4 ,prenom:"MOMO",age:50,isOnline:true},
          {id : 5 ,prenom:"soukeye",age:16,isOnline:false}
      ];
      const changeStatut = (idUser) => {
        const userList=userList.map((u)=>{
          if (u.id===idUser){
            return{...u,isOnline:!u.isOnline}
          }
          return u;
        
      });

      }
      return(
        <div style={{display:"flex",gap:"10px",padding:"10px"}}>
          <h2>Liste des utilisateurs</h2>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
          
                 { userList.map((u) => (
                 <UserProfil prenom={u.prenom} age ={u.age} isOnline={u.isOnline} key = {u.id}></UserProfil>
              ))
            }
          </div>
        </div>
      )     
               
}

export default App
