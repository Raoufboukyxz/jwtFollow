"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpddateProfileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_profile_dto_1 = require("./create-profile.dto");
class UpddateProfileDto extends (0, mapped_types_1.PartialType)(create_profile_dto_1.Profiledto) {
}
exports.UpddateProfileDto = UpddateProfileDto;
//# sourceMappingURL=update-profile.dto.js.map