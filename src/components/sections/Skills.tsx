import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const iconMapping: { [key: string]: string } = {
  "icons8:recoil": "/images/recoil.png",
  "icons8:styled": "/images/styled-component.png" // Path to your downloaded recoil icon from Icons8
  // Add other Icons8 logos here if needed
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#1f1f1f] px-3 py-5 pb-20 md:px-0">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
        {t("skills.title")}
      </h2>

      <ul className="flex flex-wrap justify-center  gap-4">
        {t("skills.icons", { returnObjects: true }).map((skill) => (
          <li
            key={skill.name}
            className="flex h-[84px] w-[100px] flex-col items-center justify-center rounded-[8px] bg-[#2A2929] p-[5x] text-white"
          >
            {skill.class.startsWith('icons8:') ? (
                          <img
                            src={iconMapping[skill.class]} // Get the image path from iconMapping
                            alt={`${skill.name} Logo`}
                            style={{ width: '50px', height: '50px' }}
                            className="mx-auto"
                          />
                        ) : (
                          <Icon
              icon={skill.class}
              className="mx-auto"
              width="39.6px"
              height="39.5px"
            />
                        )}
            
            <p className="mt-3 text-center text-xs">{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
