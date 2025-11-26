import CallAction from "@/components/CallAction";
import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPosts";
import UserExperiences from "@/components/UserExperiences";
import WhyUse from "@/components/WhyUse";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <RecentPosts></RecentPosts>
      <UserExperiences />
      <CallAction></CallAction>
      <WhyUse></WhyUse>
    </>
  );
}
