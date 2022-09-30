import ArtistInfo from "../components/artistInfo";
import MobileNav from "../components/mobileNav";
export default function ArtistPage() {
  return (
    <div>
      <MobileNav currentPage="artist"></MobileNav>
      <ArtistInfo name="Sisto"></ArtistInfo>
    </div>
  );
}
