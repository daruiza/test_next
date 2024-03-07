
import { MainLayout } from '../layouts/MainLayout';

const Home = () => {
  return (
   <>
   hola
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