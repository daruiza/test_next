
import { MainLayout } from '../layouts/MainLayout';

const Home = () => {
  return (
   <>
   hola Inicio
   </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Home;