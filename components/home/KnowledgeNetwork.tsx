import type { CSSProperties } from "react";

const networkUsers = [
  { angle: 0, reverseAngle: 0, label: "Ola" },
  { angle: 45, reverseAngle: -45, label: "Kuba" },
  { angle: 90, reverseAngle: -90, label: "Maja" },
  { angle: 135, reverseAngle: -135, label: "Bartek" },
  { angle: 180, reverseAngle: -180, label: "Zosia" },
  { angle: 225, reverseAngle: -225, label: "Adam" },
  { angle: 270, reverseAngle: -270, label: "Iga" },
  { angle: 315, reverseAngle: -315, label: "Nina" },
];

type NetworkStyle = CSSProperties & {
  "--angle"?: string;
  "--reverse-angle"?: string;
  "--delay"?: string;
};

export function KnowledgeNetwork() {
  return (
    <div className="network-orbit" aria-label="Animacja przepływu pakietów">
      <div className="network-ring" />
      {networkUsers.map((user, index) => (
        <div
          className="network-line "
          key={`line-${user.angle}`}
          style={
            {
              "--angle": `${user.angle}deg`,
              "--delay": `${index * 0.2}s`,
            } as NetworkStyle
          }
        />
      ))}

      <div className="network-user network-user-center">
        <span>Ty</span>
      </div>

      {networkUsers.map((user, index) => (
        <div
          className="network-user top-0  network-user-outer"
          key={user.label}
          style={
            {
              "--angle": `${user.angle}deg`,
              "--reverse-angle": `${user.reverseAngle}deg`,
              "--delay": `${index * 0.12}s`,
            } as NetworkStyle
          }
        >
          <span>{user.label}</span>
        </div>
      ))}
    </div>
  );
}
