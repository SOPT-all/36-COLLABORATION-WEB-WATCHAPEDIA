import { Artist } from '@/shared/types/detail'

import HeaderSection from '../../components/HeaderSection/HeaderSection'
import CastAndCrewField from '../../components/CastAndCrew/CastAndCrewField'

const CastAndCrewSection = ({
  castAndCrewList,
}: {
  castAndCrewList: Array<Artist>
}) => {
  return (
    <HeaderSection title="출연/제작">
      {castAndCrewList.map(({ role, name, character, imagePath }) => (
        <CastAndCrewField
          key={`${role} : ${name}`}
          role={role}
          name={name}
          character={character}
          imagePath={imagePath}
        />
      ))}
    </HeaderSection>
  )
}

export default CastAndCrewSection
