import { detail } from '@/mocks'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import CastAndCrewField from '../../components/CastAndCrew/CastAndCrewField'

const castImages = [
  '/images/view2/cast_1.png',
  '/images/view2/cast_2.png',
  '/images/view2/cast_3.png',
]

const CastAndCrewSection = () => {
  const { artists } = detail

  return (
    <HeaderSection title="출연/제작">
      {artists.map(({ role, name, character }, index) => (
        <CastAndCrewField
          key={`${role} : ${name}`}
          role={role}
          name={name}
          character={character}
          castImage={castImages[index]}
        />
      ))}
    </HeaderSection>
  )
}

export default CastAndCrewSection
