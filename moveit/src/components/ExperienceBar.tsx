export function ExperienceBar() {
  return (
    <div className="experience-bar">
      <span>0 xp</span>
      <div>
        <div className="colorful-bar" style={{ width: "50%" }} />
        <span className="current-experience" style={{left:"50%"}}>300xp</span>
      </div>
      <span>600 xp</span>
    </div>
  );
}
