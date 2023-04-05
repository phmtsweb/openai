import 'dotenv/config'
import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION_KEY,
})

const openai = new OpenAIApi(config)

// async function testeOpenAi() {
//   const response = await openai.listEngines()
//   console.log(response)
// }

// async function generateProductDescription(
//   productName: string,
// ): Promise<string | undefined> {
//   const prompt = `Gerar uma descrição para o produto: ${productName}`

//   const completion = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt,
//     temperature: 0.4,
//     max_tokens: 2048,
//   })

//   return completion.data.choices[0].text
// }

// async function suggestAMovie(
//   movies: string[],
// ): Promise<Array<string | undefined>> {
//   const prompt = `Sugestão de filme: ${movies.join(' ')}`

//   const completion = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt,
//     temperature: 0.9,
//     max_tokens: 2048,
//     n: 5,
//   })

//   return completion.data.choices.map((choice) => choice.text)
// }

async function harmonizeBeerAndFood(
  foods: string[],
): Promise<Array<string | undefined>> {
  const prompt = `Harmonizar cerveja com: ${foods.join(' ')}`

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    temperature: 0.9,
    max_tokens: 2048,
  })

  console.log(completion.data.choices)

  return completion.data.choices.map((choice) => choice.text?.toString())
}

// generateProductDescription('Cavaquinho Strinberg CS25E')
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

// suggestAMovie(['terror', '2023'])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

harmonizeBeerAndFood(['carne', 'churrasco'])
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
