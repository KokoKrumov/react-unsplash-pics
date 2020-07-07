import axios from 'axios'


//create метод прави инстанция на axios client
//s няколко дефолтни properties
//прави къстъмизирано копие на axios
// къстъмизираме го, за да отговаря на специфичния  url

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ijf1V6Y6yhboY-Kb0bI_3eVa-dROxH7SlWxJCl69dFc'
    }
})
