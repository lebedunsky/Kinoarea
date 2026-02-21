import { AIChat } from "@/features/AIChat";
import { SliderWithNewTrailer } from "@/features/SliderWithNewTrailer";
import ErrorBoundary from "@/shared/ui/ErrorBoundaryUI/ErrorBoundaryUI";
import { Header } from "@/widgets/Header";
import { MailingList } from "@/widgets/MailingList";
import { NewTrailer } from "@/widgets/NewTrailer";
import { NowPlaying } from "@/widgets/NowPlaying";
import { PopularMovie } from "@/widgets/PopularMovie";

const MainPage = () => {
  return (
    <>
      <Header />

      <ErrorBoundary>
        <NowPlaying />
      </ErrorBoundary>

      <ErrorBoundary>
        <NewTrailer title="Нові трейлери" />
      </ErrorBoundary>

      <ErrorBoundary>
        <SliderWithNewTrailer />
      </ErrorBoundary>

      <ErrorBoundary>
        <PopularMovie />
      </ErrorBoundary>

      <ErrorBoundary>
        <MailingList />
      </ErrorBoundary>

      <AIChat />
    </>
  );
};

export default MainPage;
