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

async function generateProductDescription(
  productName: string,
): Promise<string | undefined> {
  const prompt = `Gerar uma descrição para o produto: ${productName}`

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    temperature: 0.4,
    max_tokens: 2048,
  })

  return completion.data.choices[0].text
}

generateProductDescription('Samsung Galaxy S23').then((result) =>
  console.log(result),
)
