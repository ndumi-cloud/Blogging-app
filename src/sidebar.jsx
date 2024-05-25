import "./sidebar.css";
import artist from "../extras/img/artist.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"></span>
        <img className="pinkImg" src={artist} alt="pink book and reader" />
        <p className="paragraph">
          In the quiet town of Eldenwood, nestled between rolling hills and
          dense forests, the arrival of spring brought with it a sense of
          renewal and wonder. The air was filled with the sweet scent of
          blooming flowers, and the melodic songs of birds returning from their
          winter migration. Children laughed and played in the sun-dappled
          meadows, their joy a testament to the season's rejuvenating power. The
          townsfolk, with smiles on their faces, went about their daily
          routines, greeting each other warmly as they passed by. Eldenwood's
          ancient oak trees, standing tall and proud, seemed to whisper secrets
          of the past to anyone willing to listen. Life in Eldenwood was simple,
          yet rich with the beauty and tranquility that only such a close-knit
          community could offer.
        </p>
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Food</li>
          <li className="sidebarListItem">Fashion trends</li>
          <li className="sidebarListItem">Cars</li>
          <li className="sidebarListItem">Health and Fitness</li>
          <li className="sidebarListItem">Politics</li>
          <li className="sidebarListItem">Travel</li>
        </ul>
      </div>
      <div className="sidebarItem"></div>
      {/* <span className="sidebarTitle">FOLLOW ME</span> */}
      <div className="sidebarSocial"></div>
    </div>
  );
}
