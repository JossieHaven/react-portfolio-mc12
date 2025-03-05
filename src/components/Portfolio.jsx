import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import "./Portfolio.css";

export default function App() {
  const list = [
    {
      title: "The Shire Portal",
      link: "https://github.com/JossieHaven/studious-giggle-p1-g7",
      img: "https://github.com/JossieHaven/studious-giggle-p1-g7/blob/main/assets/images/pageSS.png?raw=true"
    },
    {
      title: "Employee-Tracker",
      link: "https://github.com/JossieHaven/employee-tracker",
      img: "https://tivazo.com/wp-content/uploads/2024/07/employee-monitoring-software-1.png"
    },
    {
      title: "Vehicle-Builder",
      link: "https://github.com/JossieHaven/vehicle-builder-mod8c",
      img: "https://images.steamusercontent.com/ugc/942842136085390990/FDBE418D364A63A3536FD2C171BC7E2865D06BB7/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
    },
    {
      title: "Professional-README-File-Generator",
      link: "https://github.com/JossieHaven/read-me-file",
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20240702120959/Readme1.png"
    },
  ];

  return (
    <div className="app-container">
      <div className="project-grid">
        {list.map((item, index) => (
          <Card key={index} className="project-card" isPressable shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.title}
                className="w-full object-cover"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
              />
            </CardBody>
            <CardFooter className="project-card-footer">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
