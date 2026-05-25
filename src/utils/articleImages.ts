import cristo from '../assets/generated/cristo.jpeg';
import duvidas from '../assets/generated/duvidas.jpeg';
import oracao from '../assets/generated/oracao.jpeg';
import prisao from '../assets/generated/prisao.jpeg';
import sofrendo from '../assets/generated/sofrendo.jpeg';
import solidao from '../assets/generated/solidao.jpeg';
import tempestadesDaVida from '../assets/generated/tempestades-da-vida.jpeg';
import tempoDeDeus from '../assets/generated/tempo-de-Deus.jpeg';

const articleImages: Record<string, string> = {
  'cristo.jpeg': cristo,
  'duvidas.jpeg': duvidas,
  'oracao.jpeg': oracao,
  'prisao.jpeg': prisao,
  'sofrendo.jpeg': sofrendo,
  'solidao.jpeg': solidao,
  'tempestades-da-vida.jpeg': tempestadesDaVida,
  'tempo-de-Deus.jpeg': tempoDeDeus,
};

export function getArticleImage(imageName: string) {
  return articleImages[imageName] ?? '';
}
