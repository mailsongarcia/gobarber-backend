import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(DATA: IParseMailTemplateDTO): Promise<string>;
}
