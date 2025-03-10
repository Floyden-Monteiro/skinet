using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{4,16}$", ErrorMessage = "Password must have 1 uppercase, 1 lowercase, 1 number, 1 non alphanumeric and at least 4 characters")]
        public string Password { get; set; }


    }
}