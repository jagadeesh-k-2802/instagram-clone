import 'package:flutter/material.dart';

const Color primaryColor = Color(0xff0095f6);
const Color secondaryColor = Color(0xff0095f6);
const Color lightGrayColor = Color(0xfffafafa);
const double defaultPagePadding = 16;

const MaterialColor primaryMaterialColor = MaterialColor(4281899248, {
  50: Color(0xffe7f3fd),
  100: Color(0xffd0e6fb),
  200: Color(0xffa0cef8),
  300: Color(0xff71b5f4),
  400: Color(0xff419df1),
  500: Color(0xff1284ed),
  600: Color(0xff0e6abe),
  700: Color(0xff0b4f8e),
  800: Color(0xff07355f),
  900: Color(0xff041a2f)
});

ThemeData instagramAppTheme = ThemeData(
  primaryColor: primaryColor,
  colorScheme: const ColorScheme.light().copyWith(primary: primaryColor),
  primarySwatch: primaryMaterialColor,
  scrollbarTheme: const ScrollbarThemeData().copyWith(
    thumbColor: MaterialStateProperty.all(primaryMaterialColor[500]),
  ),
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      foregroundColor: Colors.white,
      backgroundColor: secondaryColor,
      minimumSize: const Size.fromHeight(45),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(4.0)),
      ),
    ),
  ),
  inputDecorationTheme: const InputDecorationTheme(
    contentPadding: EdgeInsets.all(15.0),
    border: OutlineInputBorder(
      borderSide: BorderSide(
        width: 1,
        color: lightGrayColor,
      ),
    ),
    filled: true,
    fillColor: lightGrayColor,
  ),
  datePickerTheme: const DatePickerThemeData(
    backgroundColor: lightGrayColor,
    headerBackgroundColor: lightGrayColor,
    headerForegroundColor: Colors.black54,
    surfaceTintColor: lightGrayColor,
  ),
);

// Buttons
final transparentButtonStyle = ElevatedButton.styleFrom(
  backgroundColor: Colors.transparent,
  foregroundColor: Colors.black54,
  elevation: 0,
  minimumSize: const Size.fromHeight(45),
  shape: const RoundedRectangleBorder(
    side: BorderSide(color: Colors.black26, width: 2.0),
    borderRadius: BorderRadius.all(Radius.circular(4.0)),
  ),
);

// Typography
TextStyle? headlineLargeBold(BuildContext context) {
  return Theme.of(context)
      .textTheme
      .headlineLarge
      ?.copyWith(fontWeight: FontWeight.bold);
}
