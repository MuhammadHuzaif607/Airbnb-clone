import Header from '@/components/Header';
import Singleproperty from '@/components/Single_property';
import Suggestions from '@/components/Suggestions';
import Blogs from '@/components/Blogs';
import Search from "@/components/Search"
import './globals.css';
const Page = () => {
  return (
    <>
      <Header />
      <Search/>
      <div className="flex flex-wrap gap-y-3">
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
        <Singleproperty />
      </div>
      <Suggestions/>
      <Blogs/>
    </>
  );
};

export default Page;
