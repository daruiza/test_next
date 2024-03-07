
import { MainLayout } from '../../layouts/MainLayout';

const Blog = () => {
  return (
   <>
   holaBlog
   </>
  )
}

Blog.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default Blog;